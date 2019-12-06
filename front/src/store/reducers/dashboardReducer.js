const defaultState = {
    currentView: 'DASHBOARD_USER_SET_VIEW',
    setID: null,
    errorMessage: null,
};

export const dashboard = (state = defaultState, action) => {
    switch (action.type) {
        case 'DASHBOARD_USER_SET_VIEW':
            return {
                currentView: action.type,
                setID: null,
                errorMessage: null,
            };
        case 'DASHBOARD_PREFERENCES_VIEW':
            return {
                currentView: action.type,
                setID: null,
                errorMessage: null,
            };
        case 'DASHBOARD_SET_VIEW':
            return {
                currentView: action.type,
                setName: action.setName,
                setID: action.setID,
                errorMessage: null,
            };
        case 'DASHBOARD_EDIT_SET_VIEW':
            return {
                currentView: action.type,
                setID: action.setID,
                setName: action.setName,
                errorMessage: null,
            };
        case 'DASHBOARD_CREATE_SET_VIEW':
            return {
                currentView: action.type,
                setID: null,
                errorMessage: null,
            };
        case 'DASHBOARD_MODE1':
            return {
                currentView: action.type,
                setID: state.setID,
                setName: state.setName,
                errorMessage: null,
            };
        case 'DASHBOARD_MODE2':
            return {
                currentView: action.type,
                setID: state.setID,
                setName: state.setName,
                errorMessage: null,
            };
        case 'DASHBOARD_ERROR':
            return {
                currentView: state.currentView,
                setID: state.setID,
                errorMessage: action.errorMessage,
            };
        default:
            return {
                currentView: 'DASHBOARD_USER_SET_VIEW',
                setID: null,
                errorMessage: null,
            };
    }
};