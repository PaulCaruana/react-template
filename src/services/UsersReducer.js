const initialState = {
    users: {
        loading: false,
        data: null,
        error: null
    }
};

const reducer = (state, action) => {
    const actions = {
        loading: () => {
            return {
                ...state,
                users: {
                    ...state.users,
                    loading: true
                }
            };
        },
        success: () => {
            return {
                ...state,
                users: {
                    ...state.users,
                    data: action.data,
                    error: null,
                    loading: false
                }
            };
        },
        error: () => {
            return {
                ...state,
                users: {
                    ...state.users,
                    error: action.error,
                    loading: false
                }
            };
        },
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