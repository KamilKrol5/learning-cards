export const login = (email, pass) => ({
    type: 'LOGIN',
    email,
    pass,
});

export const register = (username, email, pass) => ({
    type: 'REGISTER',
    username,
    email,
    pass,
});