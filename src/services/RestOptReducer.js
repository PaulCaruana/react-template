import {v4 as uuidv4} from "uuid";

const initialState = {
    users: {
        fetching: false,
        creating: false,
        reading: false,
        updating: false,
        deleting: false,
        suspense: false,
        selectedItem: null,
        items: [],
        error: null,
    },
};

const getKey = (item) => item.id.toString();

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
    itemSelected: "itemSelected",
    created: "created",
    read: "read",
    updated: "updated",
    deleted: "deleted",
    error: "error",
};

const reducer = (state = initialState, action) => {
    const {id, data} = action;
    const {items} = state;
    switch (action.type) {
    case event.fetching:
        return {
            ...state,
            ready: state.items && state.items.length > 0,
            fetching: true,
            suspense: true,
        };
    case event.fetched:
        return {
            ...state,
            items: action.items,
            ready: true,
            selectedItem: null,
            error: null,
            fetching: false,
            suspense: false,
            mode: action.type,
        };
    case event.itemSelected:
        return {
            ...state,
            selectedItem: items.find(current => getKey(current) === id),
            error: null,
            suspense: false,
            mode: action.mode || modeType.browse,
        };
    case event.creating:
        // eslint-disable-next-line no-case-declarations
        const initId = uuidv4();
        return {
            ...state,
            items: [
                ...state.items,
                {
                    ...data,
                    id: initId,
                },
            ],
            initId,
            creating: true,
            suspense: true,
        };
    case event.created:
        data.id = data.id || state.initId;
        return {
            ...state,
            items: items.map(current => (getKey(current) === state.initId ? data : current)),
            selectedItem: data,
            error: null,
            creating: false,
            suspense: false,
            mode: action.type,
        };
    case event.reading:
        return {
            ...state,
            selectedItem: items.find(current => getKey(current) === id),
            ready: state.selectedItem != null,
            reading: true,
            suspense: true,
        };
    case event.read:
        return {
            ...state,
            items: items.map(current => (getKey(current) === id ? data : current)),
            selectedItem: data,
            ready: true,
            error: null,
            reading: false,
            suspense: false,
            mode: action.mode || modeType.browse,
        };
    case event.updating:
        return {
            ...state,
            items: items.map(current => (getKey(current) === id ? data : current)),
            updating: true,
            suspense: true,
        };
    case event.updated:
        return {
            ...state,
            items: items.map(current => (getKey(current) === id ? data : current)),
            selectedItem: data,
            error: null,
            updating: false,
            suspense: false,
            mode: action.type,
        };
    case event.deleting:
        return {
            ...state,
            items: items.filter(current => getKey(current) !== id),
            ready: state.items && state.items.length > 0,
            selectedItem: null,
            deleting: true,
            suspense: true,
        };
    case event.deleted:
        return {
            ...state,
            ready: true,
            error: null,
            deleting: false,
            suspense: false,
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
            items: [],
        };
    default:
        return state;
    }
};

export default reducer;

export {
    initialState,
};
