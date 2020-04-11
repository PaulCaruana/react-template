import {useEffect} from "react";
import {dispatch, useGlobalState} from "./Store";
import MicroEmitter from "micro-emitter";

const FETCH_EVENT = "fetch", REFETCH_EVENT = "refetch", UPDATED_EVENT = "updated";

export default class RestService {
    constructor(resource, gateway, options) {
        this.resource = resource;
        this.gateway = gateway;
        this.fetchOptions = options;
        this.eventEmitter = new MicroEmitter();
        this.dispatch = dispatch;
        this.useQuery = this.useQuery.bind(this);
        this.useExecQuery = this.useExecQuery.bind(this);
        this.useDeleteData = this.useDeleteData.bind(this);
        this.fetch = this.fetch.bind(this);
        this.selectData = this.selectData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    useExecQuery(options) {
        useEffect(() => {
            this.eventEmitter.emit(FETCH_EVENT, options);
        }, [options]);
        return this.useQuery();
    }

    useQuery() {
        const [state] = useGlobalState(this.resource);
        const fetch = this.fetch;
        const deleteData = this.deleteData;
        const selectData = this.selectData;
        const refetch = () => fetch(this.fetchOptions);
        this.eventEmitter.addListener(FETCH_EVENT, (options) => fetch(options));
        this.eventEmitter.on(REFETCH_EVENT, this.refetch);
        return {...state, fetch, refetch, selectData, deleteData};
    }

    useDeleteData() {
        const [state] = useGlobalState(this.resource);
        return {...state, deleteData: this.deleteData};

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

    selectData(payload) {
        dispatch({type: "selected", payload});
    }

    async deleteData(options) {
        dispatch({type: "deleting"});
        try {
            const response = await this.deleteInternal(options);
            dispatch({type: "deleted", id: response.data.id});
            this.eventEmitter.emit(UPDATED_EVENT);
        } catch (e) {
            dispatch({type: "error", error: e});
            console.error("Error:", e);
        }
    }
    async deleteInternal(options) {
        return await this.gateway.deleteData(options);
    }


}