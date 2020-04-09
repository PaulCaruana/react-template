import {useEffect} from "react";
import { dispatch, useGlobalState } from "./Store";
import MicroEmitter from "micro-emitter";
const QUERY_EVENT = "query";

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

    useExecQuery() {
        useEffect(() => {
            this.eventEmitter.emit(QUERY_EVENT);
        }, []);
        return this.useQuery();

    }

    useQuery() {
        const [state] = useGlobalState(this.resource);
        const fetchRequest = async () => {
            dispatch({type: "loading"});
            try {
                const response = await this.gateway.fetch();
                dispatch({type: "success", data: response.data});
            } catch (e) {
                dispatch({type: "error", error: e});
                console.error("Error:", e);
            }
        };
        this.eventEmitter.on(QUERY_EVENT, fetchRequest);
        const {loading, data, error} = state;
        return {loading, [this.resource]: data, error, fetch: fetchRequest};
    }




}