import {useEffect} from "react";
import usersGateway from "../gateways/Users";
import { dispatch, useGlobalState } from "./Store";
import MicroEmitter from "micro-emitter";

const QUERY_EVENT = "query", CHANGE_EVENT = "change", ADD_EVENT = "add", DELETE_EVENT = "delete";
const eventEmitter = new MicroEmitter();

const UserService = (gateway) => {

    const useQuery = (load) => {
        const [state] = useGlobalState("users");
        const fetch = async () => {
            dispatch({type: "loading"});
            try {
                const response = await gateway.fetch();
                dispatch({type: "success", data: response.data});
            } catch (e) {
                dispatch({type: "error", error: e});
                console.error("Error:", e);
            }
        };
        eventEmitter.on(QUERY_EVENT, fetch);
        useEffect(() => {
            if (load) {
                eventEmitter.emit(QUERY_EVENT);
            }
        }, []);
        const {loading, data, error} = state;
        return {loading, users: data, error, fetchUsers: fetch};
    };

    return {useQuery};


};
export const {useQuery} = UserService(usersGateway);

export default UserService;
