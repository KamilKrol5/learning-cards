/**
 * Reducer odpowiedzialny za obsługe zmianu stanu po odczycie z API
 * @param state poprzedni stan
 * @param action akcja
 * @returns {{}|randomUser} nowy stan
 */
export const randomUser = (state = {}, action) => {
    switch (action.type) {
        case 'RANDOM_USER_FETCHED':
            return action.randomUser;
        default:
            return {};
    }
};