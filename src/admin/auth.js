// src/admin/auth.js

const adminCredentials = {
    email: "admin",
    password: "1234"
};

export const login = (email, password) => {
    if (email === adminCredentials.email && password === adminCredentials.password) {
        localStorage.setItem('isAuthenticated', 'true');
        return true;
    } else {
        return false;
    }
};

export const logout = () => {
    localStorage.removeItem('isAuthenticated');
};

export const isAuthenticated = () => {
    return localStorage.getItem('isAuthenticated') === 'true';
};
