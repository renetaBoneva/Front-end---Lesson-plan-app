import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";

import * as authService from '../services/authService'
// import { useLocalStorage } from "../hooks/useLocalStorage";
// import { stopLoading } from "../redux/loader/loader-slice";
import { addUser, onUserLogout } from "../redux/user/user-slice";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const userState = useSelector(state => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function onLoginHandler({ email, password }) {
        try {
            const user = await authService.login({ email, password });

            // Set user's data
            dispatch(addUser({ user }));

            navigate('/');
            // dispatch(stopLoading());
        } catch (err) {
            // dispatch(stopLoading());
            // return toast.error('Incorrect email or password!');
            return console.log(err);
        }
    }

    async function onRegisterHandler({ email, password, rePass, course, classNum }) {
        try {
            const registerData = { email, course, password, rePass, classNum };
            const user = await authService.register(registerData);

            dispatch(addUser({ user }));
            navigate('/');
            // dispatch(stopLoading());
        } catch (err) {
            // dispatch(stopLoading());
            // return toast.error('Incorrect information!');
            return console.log(err);
        }
    }

    function onLogoutHandler() {
        dispatch(onUserLogout());
        navigate('/');
    }

    async function onUserDeleteHandler() {
        try {
            await authService.delUser({
                "_userID": userState._userID,
                "accessToken": userState.accessToken
            });

            dispatch(onUserLogout());
            navigate('/');
            // dispatch(stopLoading());
        } catch (err) {
            // dispatch(stopLoading());
            // return toast.error('Incorrect information!');
            return console.log(err);
        }
    }

    async function onEditHandler(newData) {
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
            // dispatch(stopLoading());
        } catch (err) {
            // dispatch(stopLoading());
            // return toast.error('Incorrect information!');
            return console.log(err);
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
