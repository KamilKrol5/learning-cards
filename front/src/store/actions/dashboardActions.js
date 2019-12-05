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
export const setDashboardSetView = (setID) => ({
    setID,
    type: 'DASHBOARD_SET_VIEW',
});

/**
 * Show error message
 * @param errorMessage error message or null to reset
 */
export const setDashboardError = (errorMessage) => ({
    errorMessage,
    type: 'DASHBOARD_ERROR',
});
