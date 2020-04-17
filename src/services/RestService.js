import MicroEmitter from "micro-emitter";
import {useEffect} from "react";
import {dispatch, useGlobalState} from "./Store";
import {event} from "./RestReducer";


export default class RestService {
    constructor(resource, gateway, options) {
        this.resource = resource;
        this.gateway = gateway;
        this.options = options;
        this.eventEmitter = new MicroEmitter();
        this.dispatch = dispatch;
        this.useService = this.useService.bind(this);
        const fetch = this.fetch.bind(this);
        const selectItem = this.selectItem.bind(this);
        const selectEdit = this.selectEdit.bind(this);
        const createItem = this.createItem.bind(this);
        const readItem = this.readItem.bind(this);
        const updateItem = this.updateItem.bind(this);
        const deleteItem = this.deleteItem.bind(this);
        const postUpdated = this.postUpdated.bind(this);
        const refetch = () => fetch(this.fetchOptions);
        this.refetch = refetch;
        this.actions = {
            fetch, refetch, selectItem, selectEdit, createItem, readItem, updateItem, deleteItem,
        };
        this.eventEmitter.addListener(event.initialFetch, (fetchOptions) => fetch(fetchOptions));
        this.eventEmitter.on(event.doRefetch, refetch);
        this.eventEmitter.on(event.isUpdated, postUpdated);
        this.event = event;
    }

    useService(options) {
        const [state] = useGlobalState(this.resource);
        this.state = state;

        useEffect(() => {
            if (options) {
                this.emit(event.initialFetch, options);
            }
        }, [options]);
        return {...state, ...this.actions};
    }

    async fetch(options) {
        dispatch({type: event.fetching});
        try {
            const response = await this.fetchInternal(options);
            this.fetchOptions = options;
            dispatch({type: event.fetched, items: response.data});
        } catch (e) {
            this.reportError(e);
        }
    }

    fetchInternal(options) {
        return this.gateway.fetchItem(options);
    }

    selectItem(id, mode) {
        dispatch({type: event.itemSelected, id: id.toString(), mode});
    }

    async createItem(options) {
        const {data} = options;
        dispatch({type: event.creating, data});
        try {
            const response = await this.createInternal(options);
            dispatch({type: event.created, data: response.data});
            this.emit(event.created);
            this.emit(event.isUpdated);
        } catch (e) {
            this.reportError(e);
        }
    }

    createInternal(options) {
        return this.gateway.createItem(options);
    }

    async readItem(id, mode, options) {
        dispatch({type: event.reading, id: id.toString()});
        try {
            const response = await this.readInternal(id, options);
            dispatch({type: event.read, id: id.toString(), data: response.data, mode});
            this.emit(event.read);
        } catch (e) {
            this.reportError(e);
        }
    }

    readInternal(options) {
        return this.gateway.readItem(options);
    }

    async updateItem(options) {
        const {id, data} = options;
        dispatch({type: event.updating, id: id.toString(), data});
        try {
            const response = await this.updateInternal(options);
            dispatch({type: event.updated, id: id.toString(), data: response.data});
            this.emit(event.updated);
            this.emit(event.isUpdated);
        } catch (e) {
            this.reportError(e);
        }
    }

    updateInternal(options) {
        return this.gateway.updateItem(options);
    }

    async deleteItem(id, options) {
        dispatch({type: event.deleting, id: id.toString()});
        try {
            const response = await this.deleteInternal(id, options);
            dispatch({type: event.deleted, id: response.data.id});
            this.emit(event.deleted);
            this.emit(event.isUpdated);
        } catch (e) {
            this.reportError(e);
        }
    }

    deleteInternal(options) {
        return this.gateway.deleteItem(options);
    }

    postUpdated() {
        // Placeholder
    }

    emit(evt, options) {
        this.eventEmitter.emit(evt, options);
    }

    reportError(e) {
        const message = e.message || "unknown error";
        const statusText = (e && e.response && e.response.statusText) || "";
        const detailedMessage = (e && e.response && e.response.data) || e.stack || e;
        dispatch({type: event.error, error: `${message} ${statusText}`});
        console.error("Error:", detailedMessage);
    }
}
