const initialState = {
    todos: {
        loading: false,
        data: null,
        error: null
    }
};

const reducer = (state, action) => {
    const actions = {
        loading: () => ({ todos: {loading: true} }),
        success: () => ({ todos: {data: action.data, error: null, loading: false} }),
        error: () => ({ todos: {error: action.error, loading: false} })
    };
    const type = action.type;
    const actionType = actions[type]();
    if (!actionType) {
        throw new Error(`Action type ${type} isn't supported`);
    }
    return actionType;
};

export default reducer;

export {
    initialState,
};