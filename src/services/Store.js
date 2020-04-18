import {createStore} from "react-hooks-global-state";
import {combineReducers} from "redux";
import counterReducer, {initialState as counterInitialState} from "./counter/Reducer";
import restReducer from "./RestReducer";

const {reducer: usersReducer, initialState: usersInitialState} = restReducer("users");
const combinedInitialState = {...counterInitialState, ...usersInitialState};

const reducer = combineReducers({
    count: counterReducer,
    users: usersReducer,
});

export const {dispatch, useGlobalState} = createStore(
    reducer,
    combinedInitialState,
);
