import {useEffect} from "react";
import { dispatch, useGlobalState } from "./Store";
import MicroEmitter from "micro-emitter";
const FETCH_EVENT = "fetch";

export default class RestService {
    constructor(resource, gateway, options) {
        this.resource = resource;
        this.gateway = gateway;
        this.options = options;
        this.eventEmitter = new MicroEmitter();
        this.dispatch = dispatch;
        this.useQuery = this.useQuery.bind(this);
        this.useExecQuery = this.useExecQuery.bind(this);
    }

    useExecQuery(options) {
        useEffect(() => {
            this.eventEmitter.emit(FETCH_EVENT, options);
        }, []);
        return this.useQuery();

    }

    useQuery() {
        const [state] = useGlobalState(this.resource);
        const fetchRequest = async (options) => {
            dispatch({type: "fetching"});
            try {
                const response = await this.fetch(options);
                dispatch({type: "fetched", data: response.data});
            } catch (e) {
                dispatch({type: "error", error: e});
                console.error("Error:", e);
            }
        };
        this.eventEmitter.addListener(FETCH_EVENT, (options) => fetchRequest(options));
        const {suspense, fetching, data, error} = state;
        return {suspense, fetching, [this.resource]: data, error, fetch: fetchRequest};
    }

    async fetch(options) {
        return await this.gateway.fetch(options);
    }




}