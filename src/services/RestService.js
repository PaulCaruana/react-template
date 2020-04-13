import {useEffect} from "react";
import {dispatch, useGlobalState} from "./Store";
import MicroEmitter from "micro-emitter";

const event = {
    initialFetch: "initialFetch",
    doRefetch: "doRefetch",
    created: "created",
    read: "read",
    updated: "updated",
    deleted: "deleted",
    isDirty: "isDirty",
};

export default class RestService {
    constructor(resource, gateway, options) {
        this.resource = resource;
        this.gateway = gateway;
        this.fetchOptions = options;
        this.eventEmitter = new MicroEmitter();
        this.dispatch = dispatch;
        this.useService = this.useService.bind(this);
        this.event = event;
    }

    useService(options) {
        const [state] = useGlobalState(this.resource);
        const fetch = this.fetch.bind(this);
        const selectData = this.selectData.bind(this);
        const setEditMode = this.setEditMode.bind(this);
        const createData = this.createData.bind(this);
        const readData = this.readData.bind(this);
        const updateData = this.updateData.bind(this);
        const deleteData = this.deleteData.bind(this);
        const refetch = () => fetch(this.fetchOptions);
        this.eventEmitter.addListener(event.initialFetch, (options) => fetch(options));
        this.eventEmitter.on(event.doRefetch, this.refetch);
        useEffect(() => {
            if (options) {
                this.eventEmitter.emit(event.initialFetch, options);
            }
        }, [options]);
        const actions = {
            fetch, refetch, selectData, setEditMode, createData, readData, updateData, deleteData
        };
        return {...state, ...actions};
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

    async fetchInternal(options) {
        return await this.gateway.fetchData(options);
    }

    selectData(id) {
        dispatch({type: "selected", id});
    }

    setEditMode(editMode) {
        dispatch({type: "editMode", editMode});
    }

    async createData(options) {
        dispatch({type: "creating"});
        try {
            const response = await this.createInternal(options);
            dispatch({type: "created", payload: response.data});
            this.eventEmitter.emit(event.created);
            this.eventEmitter.emit(event.isDirty);
        } catch (e) {
            this.reportError(e);
        }
    }
    async createInternal(options) {
        return await this.gateway.createData(options);
    }

    async readData(options) {
        dispatch({type: "reading"});
        try {
            const response = await this.readInternal(options);
            dispatch({type: "read", payload: response.data});
            this.eventEmitter.emit(event.read);
        } catch (e) {
            this.reportError(e);
        }
    }
    async readInternal(options) {
        return await this.gateway.readData(options);
    }

    async updateData(options) {
        dispatch({type: "updating"});
        try {
            const response = await this.updateInternal(options);
            dispatch({type: "updated", payload: response.data});
            this.eventEmitter.emit(event.updated);
            this.eventEmitter.emit(event.isDirty);
        } catch (e) {
            this.reportError(e);
        }
    }
    async updateInternal(options) {
        return await this.gateway.updateData(options);
    }

    async deleteData(options) {
        dispatch({type: "deleting"});
        try {
            const response = await this.deleteInternal(options);
            dispatch({type: "deleted", id: response.data.id});
            this.eventEmitter.emit(event.deleted);
            this.eventEmitter.emit(event.isDirty);
        } catch (e) {
            this.reportError(e);
        }
    }
    async deleteInternal(options) {
        return await this.gateway.deleteData(options);
    }

    reportError(e) {
        const message = e.message || "unknown error";
        const detailedMessage = (e && e.response && e.response.data) || e.stack || e;
        dispatch({type: "error", error: message});
        console.error("Error:", detailedMessage);
    }


}