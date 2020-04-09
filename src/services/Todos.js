import reducer, {initialState} from "./TodosReducer";
import {useReducer, useEffect} from "react";
import todosGateway from "../gateways/Todos";
import MicroEmitter from "micro-emitter";

const QUERY_EVENT = "query", CHANGE_EVENT = "change", ADD_EVENT = "add", DELETE_EVENT = "delete";
const eventEmitter = new MicroEmitter();

const TodoService = (gateway) => {

    const useQuery = (load) => {
        const [state, dispatch] = useReducer(reducer, initialState);
        //console.log("todos", state)
        const fetch = async () => {
            dispatch({type: "loading"});
            try {
                const response = await gateway.fetch();
                dispatch({type: "success", data: response.data});
            } catch (e) {
                dispatch({type: "error", data: e});
                console.error(e);
            }
        }
        eventEmitter.on(QUERY_EVENT, fetch);
        useEffect(() => {
            if (load) {
                eventEmitter.emit(QUERY_EVENT);
            }
        }, []);
        const {loading, data, error} = state.todos;
        return {loading, todos: data, error, fetchTodos: fetch};
    };

    return {useQuery};


}
export const {useQuery} = TodoService(todosGateway);

export default TodoService;
