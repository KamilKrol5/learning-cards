const defaultState = {
    refreshToken: null,
    accessToken: null,
    userName: null,
    loginErrorMessage: null,
    registerErrorMessage: null,
    registerSuccessful: null,
};

export const auth = (state = defaultState, action) => {
    // noinspection JSRedundantSwitchStatement
    switch (action.type) {
        case 'LOGIN_SUCCESSFUL':
            return {
                refreshToken: action.refreshToken,
                accessToken: action.accessToken,
                userName: action.userName,
                loginErrorMessage: null,
                registerErrorMessage: null,
                registerSuccessful: null,

            };
        case 'LOGIN_ERROR':
            return {
                refreshToken: null,
                accessToken: null,
                userName: null,
                loginErrorMessage: action.errorContent,
                registerErrorMessage: null,
                registerSuccessful: null,
            };
        case 'RESET_STATE':
            return {
                refreshToken: state.refreshToken,
                accessToken: state.accessToken,
                userName: state.userName,
                loginErrorMessage: null,
                registerErrorMessage: null,
                registerSuccessful: null,
            };
        case 'REGISTER_ERROR':
            return {
                refreshToken: state.refreshToken,
                accessToken: state.accessToken,
                userName: state.userName,
                loginErrorMessage: null,
                registerErrorMessage: action.errorMessage,
                registerSuccessful: null,
            };
        case 'REGISTER_SUCCESSFUL':
            return {
                refreshToken: state.refreshToken,
                accessToken: state.accessToken,
                userName: state.userName,
                loginErrorMessage: null,
                registerErrorMessage: null,
                registerSuccessful: true,
            };
        default:
            return state;
    }
};