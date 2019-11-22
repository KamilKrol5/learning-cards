import API from '../../utils/api'

export const loginSuccessful = (refreshToken, accessToken) => ({
    type: 'LOGIN_SUCCESSFUL',
    refreshToken,
    accessToken,
});

export const loginError = (errorContent) => ({
    type: 'LOGIN_ERROR',
    errorContent,
});

export const resetErrorMessage = () => ({
    type: 'RESET_ERROR_MESSAGE',
});

export const loginAPIcall = (username, pass) => (dispatch) => {
    API.login(username, pass)
        .then(response => {
            console.log(`DEBUG: Login successful, response: ${JSON.stringify(response)}`);
            dispatch(loginSuccessful(response.data.refresh, response.data.access))
        })
        .catch(error => {
            console.log(`DEBUG: Login error, response: ${JSON.stringify(error)}`);
            dispatch(loginError(error.response.data.detail.toString()));
        });
};

export const register = (username, email, pass) => ({
    type: 'REGISTER',
    username,
    email,
    pass,
});

