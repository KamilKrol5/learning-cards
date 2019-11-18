export const randomUser = (state = {}, action) => {
    switch (action.type) {
        case 'RANDOM_USER_FETCHED':
            return action.randomUser;
        default:
            return {};
    }
};