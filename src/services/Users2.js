import reducer, {initialState} from "./UsersReducer";
import {useReducer, useEffect, useMemo} from "react";
import usersGateway from "../gateways/Users";
import MicroEmitter from "micro-emitter";

const withGateway = (gateway) => {
    const Users = () => {
        //console.log("users")
        const eventEmitter = new MicroEmitter();
        const ONLOAD_EVENT="onload", CHANGE_EVENT = "change", ADD_EVENT = "add", DELETE_EVENT = "delete";

        const [state, dispatch] = useReducer(reducer, initialState);

        const fetch = useMemo(() => async () => {
            //console.log("fetch")
            dispatch({type: "loading"});
            try {
                const response = await gateway.fetch();
                dispatch({type: "success", data: response.data});
            } catch (e) {
                dispatch({type: "error", data: e});
                console.error(e.response.status);
            }
        }, []);
        const {loading, data, error} = state.users;
/*
        const handler = () => {
            dispatch({type: "loading"});
            console.log("handled")
        }
        eventEmitter.once(ONLOAD_EVENT, fetch);
*/

/*
        useEffect(() => {
            //console.log("render2")
            eventEmitter.emit(ONLOAD_EVENT);
        }, []);
*/

        return {
            useGetData: {fetch, loading, data, error}
        };
    };
    return Users;

}

export default withGateway(usersGateway);