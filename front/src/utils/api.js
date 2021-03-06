import axios from 'axios'

const rootURL = "http://127.0.0.1:8000";
const apiCallTimeout = 2000;
const apiServer = axios.create();
apiServer.defaults.timeout = 3000;
apiServer.defaults.baseURL = rootURL;

const API = {
    login: (username, password) => {
        return apiServer({
            url: "/api/token/",
            method: "post",
            data: {
                username,
                password,
            },
            timeout: apiCallTimeout,
        })
    },

    register: (username, email, password) => {
        return apiServer({
            url: "/api/register/",
            method: "post",
            data: {
                username,
                email,
                password,
            },
            timeout: apiCallTimeout,
        })
    },

    getUserSets: (token) => {
        return apiServer({
            url: "/api/sets/",
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`
            },
            timeout: apiCallTimeout,
        })
    },

    addSet: (name, token) => {
        return apiServer({
            url: "/api/sets/",
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                name: name,
            },
            timeout: apiCallTimeout,
        })
    },

    updateSet: (setId, newSetName, token) => {
        return apiServer({
            url: `/api/sets/${setId}`,
            method: "patch",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                name: newSetName,
            },
            timeout: apiCallTimeout,
        })
    },

    removeSet: (setId, token) => {
        return apiServer({
            url: `/api/sets/${setId}`,
            method: "delete",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {},
            timeout: apiCallTimeout,
        })
    },

    getSetItems: (setID, token) => {
        return apiServer({
            url: `/api/items/?set_id=${setID}`,
            method: "get",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {},
            timeout: apiCallTimeout,
        })
    },

    addItem: (itemId, itemTerm, itemDefinition, itemSetId, token) => {
        return apiServer({
            url: `/api/items/add`,
            method: "post",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: [{
                "term": itemTerm,
                "definition": itemDefinition,
                "learning_set_id": itemSetId
            }],
            timeout: apiCallTimeout,
        })
    },

    updateItem: (itemId, itemTerm, itemDefinition, itemSetId, token) => {
        return apiServer({
            url: `/api/items/${itemId}`,
            method: "patch",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                "term": itemTerm,
                "definition": itemDefinition,
                "learning_set_id": itemSetId
            },
            timeout: apiCallTimeout,
        })
    },

    removeItem: (itemId, token) => {
        return apiServer({
            url: `/api/items/${itemId}`,
            method: "delete",
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {},
            timeout: apiCallTimeout,
        })
    },
};

export default API;