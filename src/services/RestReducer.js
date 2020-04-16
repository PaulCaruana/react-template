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

export const modeType = {
    list: "list",
    add: "add",
    browse: "browse",
    edit: "edit",
    del: "delete"
};

export const event = {
    initialFetch: "initialFetch",
    doRefetch: "doRefetch",
    isUpdated: "isUpdated",
    fetching: "fetching",
    creating: "creating",
    reading: "reading",
    updating: "updating",
    deleting: "deleting",
    fetched: "fetched",
    selectedItem: "selectedItem",
    created: "created",
    read: "read",
    updated: "updated",
    deleted: "deleted",
    editMode: "editMode",
    error: "error",
};

const reducer = (state = initialState, action) => {
    const {payload} = action;
    const id = (payload) ? payload.id : action.id;
    const {items} = state;
    switch (action.type) {
    case event.fetching:
        return {
            ...state,
            fetching: true,
            suspense: true,
        };
    case event.creating:
        return {
            ...state,
            creating: true,
            suspense: true,
        };
    case event.reading:
        return {
            ...state,
            reading: true,
            suspense: true,
        };
    case event.updating:
        return {
            ...state,
            updating: true,
            suspense: true,
        };
    case event.deleting:
        return {
            ...state,
            deleting: true,
            suspense: true,
        };
    case event.fetched:
        return {
            ...state,
            items: action.items,
            selectedItem: null,
            error: null,
            fetching: false,
            suspense: false,
            mode: action.type,
        };
    case event.selectedItem:
        return {
            ...state,
            selectedItem: items.find(current => current.id === id),
            error: null,
            suspense: false,
            mode: action.mode || modeType.browse,
        };
    case event.created:
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
    case event.read:
        return {
            ...state,
            items: items.map(current => (current.id === id ? payload : current)),
            selectedItem: payload,
            error: null,
            reading: false,
            suspense: false,
            mode: action.mode || modeType.browse,
        };
    case event.updated:
        return {
            ...state,
            items: items.map(current => (current.id === id ? payload : current)),
            selectedItem: payload,
            error: null,
            updating: false,
            suspense: false,
            mode: action.type,
        };
    case event.deleted:
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
    case event.error:
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
