import { requester } from "./requester";

export const login = async (loginData) => requester.post('/login', loginData);

export const register = async (registerData) => requester.post('/register', registerData);

export const delUser = async (userState) => requester.delete(`/users/${userState._userID}`, userState)

export const editUser = async (reqData) => requester.put(`/users/${reqData._userID}`, reqData)