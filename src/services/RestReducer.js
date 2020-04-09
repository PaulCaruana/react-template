const initialState = {
    users: {
        loading: false,
        data: null,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case "loading":
        return {
            ...state,
            loading: true
        };
    case "success":
        return {
            ...state,
            data: action.data,
            error: null,
            loading: false
        };
    case "error":
        return {
            ...state,
            error: action.error,
            loading: false
        };
    default:
        return state;
    }
};

export default reducer;

export {
    initialState,
};