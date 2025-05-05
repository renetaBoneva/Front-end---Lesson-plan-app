import { requester } from "./requester";

export const login = async (loginData) => requester.post('/login', loginData);

export const register = async (registerData) => requester.post('/register', registerData);

// export const logout = async () => requester.get('/logout');

// export const getUserById = async (_userID) => requester.get(`/users/${_userID}`);

// export const isValidAccessToken = async () => requester.post('/token/isValid');