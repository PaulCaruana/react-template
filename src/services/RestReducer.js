import {v4 as uuidv4} from "uuid";

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
    deletingMany: "deletingMany",
    fetched: "fetched",
    itemSelected: "itemSelected",
    created: "created",
    read: "read",
    updated: "updated",
    deleted: "deleted",
    deletedMany: "deletedMany",
    error: "error",
};

const restReducer = (resource, key = "id") => {
    const relInitialState = {
        fetching: false,
        creating: false,
        reading: false,
        updating: false,
        deleting: false,
        deletingMany: false,
        completed: false,
        hasItems: false,
        selectedItem: null,
        items: [],
        error: null,
    };

    const initialState = {[resource]: relInitialState};

    const isMatch = (item, id) => {
        if (id === undefined) {
            throw new Error("Action must contain id");
        }
        const itemId = item[key];
        if (itemId === undefined) {
            throw new Error("Item key not found");
        }
        return itemId.toString() === id.toString();
    };

    const isMatchMany = (item, ids) => {
        if (ids === undefined) {
            throw new Error("Action must contain ids");
        }
        const itemId = item[key];
        if (itemId === undefined) {
            throw new Error("Item key not found");
        }
        for (const id of ids) {
            if (itemId.toString() === id.toString()) {
                return true;
            }
        }
        return false;
    };

    const deleteItem = (items, id) => {
        const deleteIndex = items.findIndex(current => isMatch(current, id));
        if (deleteIndex === -1) {
            return items;
        }
        const results = [
            ...items.slice(0, deleteIndex),
            ...items.slice(deleteIndex + 1)
        ];
        return results;
    };

    const deleteItems = (items, ids) => {
        const results = items.filter(current => !isMatchMany(current, ids));
        return results;
    };

    const reducer = (state = initialState, action) => {
        const {id, data} = action;
        const {items} = state;
        switch (action.type) {
        case evt.fetching:
            return {
                ...state,
                hasItems: state.items && state.items.length > 0,
                fetching: true,
                completed: true,
            };
        case evt.fetched:
            return {
                ...state,
                items: action.items,
                hasItems: true,
                selectedItem: null,
                error: null,
                fetching: false,
                completed: false,
                mode: action.type,
            };
        case evt.itemSelected:
            return {
                ...state,
                selectedItem: items.find(current => isMatch(current, id)),
                error: null,
                completed: false,
                mode: action.mode || modeType.browse,
            };
        case evt.creating:
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
                completed: true,
            };
        case evt.created:
            data.id = data.id || state.initId;
            return {
                ...state,
                items: items.map(current => (isMatch(current, state.initId) ? data : current)),
                selectedItem: data,
                error: null,
                creating: false,
                completed: false,
                mode: action.type,
            };
        case evt.reading:
            return {
                ...state,
                selectedItem: items.find(current => isMatch(current, id)),
                reading: true,
                completed: true,
            };
        case evt.read:
            return {
                ...state,
                items: items.map(current => (isMatch(current, id) ? data : current)),
                selectedItem: data,
                error: null,
                reading: false,
                completed: false,
                mode: action.mode || modeType.browse,
            };
        case evt.updating:
            return {
                ...state,
                items: items.map(current => (isMatch(current, id)? data : current)),
                updating: true,
                completed: true,
            };
        case evt.updated:
            return {
                ...state,
                items: items.map(current => (isMatch(current, id)? data : current)),
                selectedItem: data,
                ready: true,
                error: null,
                updating: false,
                completed: false,
                mode: action.type,
            };
        case evt.deleting:
            return {
                ...state,
                items: deleteItem(items, id),
                selectedItem: null,
                deleting: true,
                completed: true,
            };
        case evt.deleted:
            return {
                ...state,
                error: null,
                deleting: false,
                completed: false,
                mode: action.type,
            };
        case evt.deletingMany:
            return {
                ...state,
                items: deleteItems(items, action.ids),
                selectedItem: null,
                deleting: true,
                completed: true,
            };
        case evt.deletedMany:
            return {
                ...state,
                error: null,
                deletingMany: false,
                completed: false,
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
                completed: false,
                selectedItem: null,
                items: [],
            };
        default:
            return state;
        }
    };

    return {reducer, initialState};
};

export default restReducer;
