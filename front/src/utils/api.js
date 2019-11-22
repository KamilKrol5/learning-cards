import axios from 'axios'

const rootURL = "http://206.81.21.127:8000";
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
            timeout: 1000 * 2,
        })
    }
};

export default API;