import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import * as authService from '../services/authService'
import { startLoading, stopLoading } from "../redux/loader/loader-slice";
import { addUser, onUserLogout } from "../redux/user/user-slice";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function onLoginHandler({ email, password }) {
        dispatch(startLoading());
        try {
            const user = await authService.login({ email, password });

            // Set user's data
            dispatch(addUser({ user }));

            navigate('/');
        } catch (err) {
            return toast.error('Невалиден имейл или парола!');
        } finally {
            dispatch(stopLoading());
        }
    }

    async function onRegisterHandler({ email, password, rePass, course, classNum }) {
        dispatch(startLoading());
        try {
            const registerData = { email, course, password, rePass, classNum };
            const user = await authService.register(registerData);

            dispatch(addUser({ user }));
            navigate('/');
        } catch (err) {
            return toast.error('Невалидна информация!');
        } finally {
            dispatch(stopLoading());
        }
    }

    function onLogoutHandler() {
        dispatch(startLoading());
        dispatch(onUserLogout());
        navigate('/');
        dispatch(stopLoading());
    }

    async function onUserDeleteHandler() {
        dispatch(startLoading());
        try {
            await authService.delUser({
                "_userID": userState._userID,
                "accessToken": userState.accessToken
            });

            dispatch(onUserLogout());
            navigate('/');
        } catch (err) {
            return toast.error('Не е възможно изпълнението на това действие!');
        } finally {
            dispatch(stopLoading());
        }
    }

    async function onEditHandler(newData) {
        dispatch(startLoading());
        try {
            newData = {
                "email": newData.email,
                "course": newData.course,
                "classNum": newData.classNum,
            };

            const user = await authService.editUser({
                newData,
                "_userID": userState._userID,
                "accessToken": userState.accessToken
            });

            dispatch(addUser({ user }));

            navigate('/profile');
        } catch (err) {
            return toast.error('Невалидна информация!');
        } finally {
            dispatch(stopLoading());
        }

    }

    const context = {
        userState,
        onLoginHandler,
        onRegisterHandler,
        onLogoutHandler,
        onUserDeleteHandler,
        onEditHandler,
        isAuthenticated: !!userState?.accessToken,
    }

    return (
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>);

}
