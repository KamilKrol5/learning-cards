const defaultState = {
    token: null,
    userID: null,
};

/**
 * Reducer obsługujący zmianę stanu auth po rejestracji i logowaniu
 * @param state poprzedni stan
 * @param action akcja
 * @returns {{userID: null, token: null}|{userID: string, token: number}} nowy stan
 */
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