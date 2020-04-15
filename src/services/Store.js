import {createStore} from "react-hooks-global-state";
import {combineReducers} from "redux";
import counterReducer, {initialState as counterInitialState} from "./counter/Reducer";
import usersReducer, {initialState as usersInitialState} from "./RestReducer";

const initialState = {...counterInitialState, ...usersInitialState}

const reducer = combineReducers({
    count: counterReducer,
    users: usersReducer,
});

export const {dispatch, useGlobalState} = createStore(
    reducer,
    initialState,
);
