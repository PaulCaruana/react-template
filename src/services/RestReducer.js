const initialState = {
    users: {
        fetching: false,
        creating: false,
        reading: false,
        updating: false,
        deleting: false,
        suspense: false,
        editMode: false,
        selectedItem: null,
        items: null,
        error: null,
    },
};

const reducer = (state = initialState, action) => {
    const {payload} = action;
    const id = (payload) ? payload.id : action.id;
    const {items} = state;
    switch (action.type) {
    case "fetching":
        return {
            ...state,
            fetching: true,
            suspense: true,
        };
    case "creating":
        return {
            ...state,
            creating: true,
            suspense: true,
        };
    case "reading":
        return {
            ...state,
            reading: true,
            suspense: true,
        };
    case "updating":
        return {
            ...state,
            updating: true,
            suspense: true,
        };
    case "deleting":
        return {
            ...state,
            deleting: true,
            suspense: true,
        };
    case "fetched":
        return {
            ...state,
            items: action.items,
            selectedItem: null,
            error: null,
            fetching: false,
            suspense: false,
            mode: action.type,
        };
    case "selectedItem":
        return {
            ...state,
            selectedItem: items.find(current => current.id === id),
            error: null,
            suspense: false,
            mode: action.mode || "selectedItem",
        };
    case "created":
        return {
            ...state,
            items: [
                ...state.items,
                {
                    ...payload,
                    id: (id) || items.reduce((maxId, entry) => Math.max(entry.id, maxId), -1) + 1,
                },
            ],
            selectedItem: {...state.items[state.items.length - 1]},
            error: null,
            creating: false,
            suspense: false,
            mode: action.type,
        };
    case "read":
        return {
            ...state,
            items: items.map(current => (current.id === id ? payload : current)),
            selectedItem: payload,
            error: null,
            reading: false,
            suspense: false,
            mode: action.mode || "selectedItem",
        };
    case "updated":
        return {
            ...state,
            items: items.map(current => (current.id === id ? payload : current)),
            selectedItem: payload,
            error: null,
            updating: false,
            suspense: false,
            mode: action.type,
        };
    case "deleted":
        return {
            ...state,
            items: items.filter(current => current.id !== action.id),
            selectedItem: null,
            error: null,
            deleting: false,
            suspense: false,
            mode: action.type,
        };
    case "editMode":
        return {
            ...state,
            mode: action.type,
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
            selectedItem: null,
            items: null,
        };
    default:
        return state;
    }
};

export default reducer;

export {
    initialState,
};
