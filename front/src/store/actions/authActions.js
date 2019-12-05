import API from '../../utils/api'
const CONNECTION_TO_SERVER_LOST_MESSAGE = "Connection to server lost";

export const loginSuccessful = (refreshToken, accessToken, username) => ({
    type: 'LOGIN_SUCCESSFUL',
    refreshToken,
    accessToken,
    username,
});

export const loginError = (errorContent) => ({
    type: 'LOGIN_ERROR',
    errorContent,
});

export const registerSuccessful = () => ({
    type: `REGISTER_SUCCESSFUL`,
});

export const registerError = (errorMessage) => ({
    type: `REGISTER_ERROR`,
    errorMessage,
});

export const resetState = () => ({
    type: 'RESET_STATE',
});

export const logOut = () => ({
    type: 'LOG_OUT',
});

export const loginAPIcall = (username, pass) => (dispatch) => {
    API.login(username, pass)
        .then(response => {
            console.log(`DEBUG: Login successful, response: ${JSON.stringify(response)}`);
            dispatch(loginSuccessful(response.data.refresh, response.data.access, username))
        })
        .catch(error => {
            console.log(`DEBUG: Login error, response: ${JSON.stringify(error)}`);
            if (error.response != null)
                dispatch(loginError(error.response.data.detail.toString()));
            else
                dispatch(loginError(CONNECTION_TO_SERVER_LOST_MESSAGE))
        });
};

export const register = (username, email, password) => (dispatch) => {
    API.register(username, email, password).then(
        response => {
            console.log(`DEBUG: Register successful, response: ${JSON.stringify(response)}`);
            dispatch(registerSuccessful());
        }).catch(error => {
            console.log(`DEBUG: Register failed, response: ${JSON.stringify(error)}`);
            if (error.response != null) {
                let message = "";
                if (error.response.data.username !== undefined) {
                    message = message + error.response.data.username.toString();
                }
                if (error.response.data.email !== undefined) {
                    message = message + error.response.data.email.toString();
                }
                if (error.response.data.password !== undefined) {
                    message = message + error.response.data.password.toString();
                }
                if (message === "") message = "Unknown error has occurred.";
                dispatch(registerError(message));
            } else {
                dispatch(loginError(CONNECTION_TO_SERVER_LOST_MESSAGE));
            }
    });
};

