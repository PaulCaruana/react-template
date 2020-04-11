import {useEffect} from "react";
import {dispatch, useGlobalState} from "./Store";
import MicroEmitter from "micro-emitter";

const FETCH_EVENT = "fetch", REFETCH_EVENT = "refetch", DELETE_EVENT = "delete";

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
    }

    useExecQuery(options) {
        useEffect(() => {
            this.eventEmitter.emit(FETCH_EVENT, options);
        }, [options]);
        return this.useQuery();

    }

    useQuery() {
        const [state] = useGlobalState(this.resource);
        const refetch = () => this.fetch(this.fetchOptions);
        this.eventEmitter.addListener(FETCH_EVENT, (options) => this.fetch(options));
        this.eventEmitter.on(REFETCH_EVENT, this.refetch);
        const {suspense, fetching, data, error} = state;
        return {suspense, fetching, [this.resource]: data, error, fetch: this.fetch, refetch};
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

    useDeleteData() {
        const [state] = useGlobalState(this.resource);
        const deleteData = async (options) => {
            dispatch({type: "deleting"});
            try {
                const response = await this.deleteInternal(options);
                dispatch({type: "deleted", id: response.data.id});
            } catch (e) {
                dispatch({type: "error", error: e});
                console.error("Error:", e);
            }
        };
        this.eventEmitter.on(DELETE_EVENT, deleteData);
        const {suspense, deleting, data, error} = state;
        return {suspense, deleting, [this.resource]: data, error, deleteData};
    }

    async deleteInternal(options) {
        return await this.gateway.deleteData(options);
    }


}