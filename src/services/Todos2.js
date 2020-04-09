import React from "react";
import todosReducer, {initialState} from "./TodosReducer";

export default function Todos() {
    const [state, dispatch] = React.useReducer(todosReducer, initialState);

    const fetch = async () => {
        dispatch({ type: "fetch" });
        try {
            const data = null;
            dispatch({type: "success", data: data});
        } catch(err) {
            dispatch({ type: "error", error: err });
        }
        return {
            loading: state.loading,
            data: state.data,
            error: state.error
        };
    };

    return {
        fetch
    };

}