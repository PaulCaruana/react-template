const initialState = {
    users: {
        fetching: false,
        creating: false,
        reading: false,
        updating: false,
        deleting: false,
        suspense: false,
        editMode: false,
        selected: null,
        data: null,
        error: null
    }
};

const reducer = (state = initialState, action) => {
    const payload = action.payload;
    const id = (payload) ? payload.id : action.id;
    const data = state.data;
    switch (action.type) {
    case "fetching":
        return {
            ...state,
            fetching: true,
            suspense: true
        };
    case "creating":
        return {
            ...state,
            creating: true,
            suspense: true
        };
    case "reading":
        return {
            ...state,
            reading: true,
            suspense: true
        };
    case "updating":
        return {
            ...state,
            updating: true,
            suspense: true
        };
    case "deleting":
        return {
            ...state,
            deleting: true,
            suspense: true
        };
    case "fetched":
        return {
            ...state,
            data: action.data,
            selected: null,
            error: null,
            fetching: false,
            suspense: false
        };
    case "selected":
        return {
            ...state,
            selected: data.find(current => (current.id === id ? payload : current)),
            error: null,
            suspense: false
        };
    case "created":
        return {
            ...state,
            data: [
                ...state.data,
                {
                    ...payload,
                    id: (id) ? id : data.reduce((maxId, data) => Math.max(data.id, maxId), -1) + 1,
                }
            ],
            selected: {...state.data[state.data.length - 1]},
            error: null,
            creating: false,
            suspense: false
        };
    case "read":
        return {
            ...state,
            data: data.map(current => (current.id === id ? payload : current)),
            selected: payload,
            error: null,
            reading: false,
            suspense: false
        };
    case "updated":
        return {
            ...state,
            data: data.map(current => (current.id === id ? payload : current)),
            selected: payload,
            error: null,
            updating: false,
            suspense: false
        };
    case "deleted":
        return {
            ...state,
            data: data.filter(current => current.id !== action.id),
            selected: null,
            error: null,
            deleting: false,
            suspense: false
        };
    case "editMode":
        return {
            ...state,
            editMode: action.editMode
        };
    case "error":
        return {
            ...state,
            error: action.error,
            fetching: false,
            creating: false,
            reading: false,
            updating: false,
            deleting: false,
            suspense: false,
            editMode: false,
            selected: null,
            data: null
        };
    default:
        return state;
    }
};

export default reducer;

export {
    initialState,
};