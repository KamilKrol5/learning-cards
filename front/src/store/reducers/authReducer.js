const defaultState = {
    token: null,
    userID: null,
};

export const auth = (state = defaultState, action) => {
    // noinspection JSRedundantSwitchStatement
    switch (action.type) {
        case 'LOGIN':
            return {
                token: 1,
                userID: 'testUser1',
            };
        case 'REGISTER':
            return {
                token: 2,
                userID: 'testUser2'
            };
        default:
            return state;
    }
};