/**
 * Default action - showing all sets of current user
 */
export const setDashboardUserSetView = () => ({
    type: 'DASHBOARD_USER_SET_VIEW',
});

/**
 * Showing Preferences
 */
export const setDashboardPreferencesView = () => ({
    type: 'DASHBOARD_PREFERENCES_VIEW',
});

/**
 * Showing view of a single set
 */
export const setDashboardSetView = (setID, setName) => ({
    setID,
    setName,
    type: 'DASHBOARD_SET_VIEW',
});

/**
 *  Show view where a set can be edited
 */
export const setDashboardEditSetView = (setID, setName) => ({
    setID,
    setName,
    type: 'DASHBOARD_EDIT_SET_VIEW',
});

/**
 *  Show view where a set can be created
 */
export const setDashboardCreateSetView = () => ({
    type: 'DASHBOARD_CREATE_SET_VIEW',
});

export const setDashboardMode1 = () => ({
    type: 'DASHBOARD_MODE1',
});

export const setDashboardMode2 = () => ({
    type: 'DASHBOARD_MODE2',
});

/**
 * Show error message
 * @param errorMessage error message or null to reset
 */
export const setDashboardError = (errorMessage) => ({
    errorMessage,
    type: 'DASHBOARD_ERROR',
});
