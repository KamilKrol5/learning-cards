import axios from 'axios'

const host = "http://192.168.137.1:8000";

const API = {
    login: (username, password) => {
        return axios.post(`${host}/api/token/`, {
            username: username,
            password: password,
        }).then(console.log)
    }
};

export default API;