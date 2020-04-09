const initialState = {
    users: {
        fetching: false,
        suspense: false,
        data: null,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case "fetching":
        return {
            ...state,
            fetching: true,
            suspense: true
        };
    case "fetched":
        return {
            ...state,
            data: action.data,
            error: null,
            fetching: false,
            suspense: false
        };
    case "error":
        return {
            ...state,
            error: action.error,
            fetching: false,
            suspense: false
        };
    default:
        return state;
    }
};

export default reducer;

export {
    initialState,
};