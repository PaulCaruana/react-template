import { v4 as uuidv4 } from "uuid";

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

export const evt = {
    initialFetch: "initialFetch",
    doRefetch: "doRefetch",
    isUpdated: "isUpdated",
    fetching: "fetching",
    creating: "creating",
    reading: "reading",
    updating: "updating",
    deleting: "deleting",
    fetched: "fetched",
    itemSelected: "itemSelected",
    created: "created",
    read: "read",
    updated: "updated",
    deleted: "deleted",
    editMode: "editMode",
    error: "error",
};

const reducer = (state = initialState, action) => {
    const {id, data} = action;
    const {items} = state;
    switch (action.type) {
    case evt.fetching:
        return {
            ...state,
            fetching: true,
            suspense: true,
        };
    case evt.fetched:
        return {
            ...state,
            items: action.items,
            selectedItem: null,
            error: null,
            fetching: false,
            suspense: false,
            mode: action.type,
        };
    case evt.itemSelected:
        return {
            ...state,
            selectedItem: items.find(current => current.id === id),
            error: null,
            suspense: false,
            mode: action.mode || modeType.browse,
        };
    case evt.creating:
        return {
            ...state,
            creating: true,
            suspense: true,
        };
    case evt.created:
        return {
            ...state,
            items: [
                ...state.items,
                {
                    ...data,
                    id: id || uuidv4(),
                },
            ],
            selectedItem: {...state.items[state.items.length - 1]},
            error: null,
            creating: false,
            suspense: false,
            mode: action.type,
        };
    case evt.reading:
        return {
            ...state,
            reading: true,
            suspense: true,
        };
    case evt.read:
        return {
            ...state,
            items: items.map(current => (current.id === id ? data : current)),
            selectedItem: data,
            error: null,
            reading: false,
            suspense: false,
            mode: action.mode || modeType.browse,
        };
    case evt.updating:
        return {
            ...state,
            updating: true,
            suspense: true,
        };
    case evt.updated:
        return {
            ...state,
            items: items.map(current => (current.id === id ? data : current)),
            selectedItem: data,
            error: null,
            updating: false,
            suspense: false,
            mode: action.type,
        };
    case evt.deleting:
        return {
            ...state,
            deleting: true,
            suspense: true,
        };
    case evt.deleted:
        return {
            ...state,
            items: items.filter(current => current.id !== action.id),
            selectedItem: null,
            error: null,
            deleting: false,
            suspense: false,
            mode: action.type,
        };
    case evt.error:
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
