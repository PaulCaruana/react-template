import MicroEmitter from "micro-emitter";
import {useEffect} from "react";
import {dispatch, useGlobalState} from "./Store";

const event = {
    initialFetch: "initialFetch",
    doRefetch: "doRefetch",
    created: "created",
    read: "read",
    updated: "updated",
    deleted: "deleted",
    isUpdated: "isUpdated",
};

export default class RestService {
    constructor(resource, gateway, options) {
        this.resource = resource;
        this.gateway = gateway;
        this.options = options;
        this.eventEmitter = new MicroEmitter();
        this.dispatch = dispatch;
        this.useService = this.useService.bind(this);
        const fetch = this.fetch.bind(this);
        const selectData = this.selectData.bind(this);
        const editSelected = this.editSelected.bind(this);
        const createData = this.createData.bind(this);
        const readData = this.readData.bind(this);
        const updateData = this.updateData.bind(this);
        const deleteData = this.deleteData.bind(this);
        const postUpdated = this.postUpdated.bind(this);
        const refetch = () => fetch(this.fetchOptions);
        this.refetch = refetch;
        this.actions = {
            fetch, refetch, selectData, editSelected, createData, readData, updateData, deleteData,
        };
        this.eventEmitter.addListener(event.initialFetch, (fetchOptions) => fetch(fetchOptions));
        this.eventEmitter.on(event.doRefetch, refetch);
        this.eventEmitter.on(event.isUpdated, postUpdated);
        this.event = event;
    }

    useService(options) {
        const [state] = useGlobalState(this.resource);
        useEffect(() => {
            if (options) {
                this.emit(event.initialFetch, options);
            }
        }, [options]);
        return {...state, ...this.actions};
    }

    async fetch(options) {
        dispatch({type: "fetching"});
        try {
            const response = await this.fetchInternal(options);
            this.fetchOptions = options;
            dispatch({type: "fetched", data: response.data});
        } catch (e) {
            dispatch({type: "error", error: e});
            console.error("Error:", e);
        }
    }

    fetchInternal(options) {
        return this.gateway.fetchData(options);
    }

    selectData(id, mode) {
        dispatch({type: "selected", id, mode});
    }

    async createData(options) {
        dispatch({type: "creating"});
        try {
            const response = await this.createInternal(options);
            dispatch({type: "created", payload: response.data});
            this.emit(event.created);
            this.emit(event.isUpdated);
        } catch (e) {
            this.reportError(e);
        }
    }

    createInternal(options) {
        return this.gateway.createData(options);
    }

    async readData(options, mode) {
        dispatch({type: "reading"});
        try {
            const response = await this.readInternal(options);
            dispatch({type: "read", payload: response.data, mode});
            this.emit(event.read);
        } catch (e) {
            this.reportError(e);
        }
    }

    readInternal(options) {
        return this.gateway.readData(options);
    }

    async updateData(options) {
        dispatch({type: "updating"});
        try {
            const response = await this.updateInternal(options);
            dispatch({type: "updated", payload: response.data});
            this.emit(event.updated);
            this.emit(event.isUpdated);
        } catch (e) {
            this.reportError(e);
        }
    }

    updateInternal(options) {
        return this.gateway.updateData(options);
    }

    async deleteData(options) {
        dispatch({type: "deleting"});
        try {
            const response = await this.deleteInternal(options);
            dispatch({type: "deleted", id: response.data.id});
            this.emit(event.deleted);
            this.emit(event.isUpdated);
        } catch (e) {
            this.reportError(e);
        }
    }

    deleteInternal(options) {
        return this.gateway.deleteData(options);
    }

    postUpdated() {
        // Placeholder
    }

    emit(evt, options) {
        this.eventEmitter.emit(evt, options);
    }

    reportError(e) {
        const message = e.message || "unknown error";
        const detailedMessage = (e && e.response && e.response.data) || e.stack || e;
        dispatch({type: "error", error: message});
        console.error("Error:", detailedMessage);
    }
}
