const defaultState = {
    refreshToken: null,
    accessToken: null,
    loginErrorMessage: null,
};

export const auth = (state = defaultState, action) => {
    // noinspection JSRedundantSwitchStatement
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL':
            return {
                refreshToken: action.refreshToken,
                accessToken: action.accessToken,
                loginErrorMessage: null,
            };
        case 'LOGIN_ERROR':
            return {
                refreshToken: null,
                accessToken: null,
                loginErrorMessage: action.errorContent,
            };
        case 'RESET_ERROR_MESSAGE':
            return {
                refreshToken: state.refreshToken,
                accessToken: state.accessToken,
                loginErrorMessage: null,
            };
        default:
            return state;
    }
};