
export const login = (username, password) => {
    // for actual authentication
    // wheere successful login would be
    if (username && password) {
        localStorage.setItem('user', username);
        return true;
    }
    return false;
};

export const logout = () => {
    localStorage.removeItem('user');
};

export const isLoggedIn = () => {
    return localStorage.getItem('user') !== null;
};
