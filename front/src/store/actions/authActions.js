/**
 * Akcja odpowiedzialna za logowanie
 * @param email email
 * @param pass hasło
 * @returns {{pass: *, type: string, email: *}} obiekt przekazywany do reducera
 */
import API from '../../utils/api'

export const login = (email, pass) => ({
    type: 'LOGIN',
    email,
    pass,
});

export const loginAPIcall = (username, pass) => (dispatch) => {
    API.login(username, pass)
        .then(data => {
            console.log(JSON.stringify(data));
            dispatch(login("dupa", "dupa"));
        })
};



/**
 * Akcja odpowiedzialna za rejestrację
 * @param username nazwa użytkownika
 * @param email
 * @param pass hasło
 * @returns {{pass: *, type: string, email: *, username: *}} obiekt przekazywany do reducera
 */
export const register = (username, email, pass) => ({
    type: 'REGISTER',
    username,
    email,
    pass,
});

