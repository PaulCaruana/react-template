import {createStore} from "react-hooks-global-state";
import counterReducer, {initialState as counterInitialState} from "./counter/Reducer";
import usersReducer, {initialState as usersInitialState} from "./RestReducer";
import {combineReducers} from "redux";

const initialState = {...counterInitialState, ...usersInitialState}

const reducer = combineReducers({
    count: counterReducer,
    users: usersReducer
});

export const {dispatch, useGlobalState} = createStore(
    reducer,
    initialState
);