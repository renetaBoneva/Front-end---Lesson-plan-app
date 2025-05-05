import { configureStore } from "@reduxjs/toolkit";

import loaderReducer from "./loader/loader-slice";
import userReducer from "./user/user-slice";

export const store = configureStore({
    reducer: {
        isLoading: loaderReducer,
        user: userReducer
    }
})