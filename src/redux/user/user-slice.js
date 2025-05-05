import { createSlice } from "@reduxjs/toolkit";

const initUser = {};

const userSlice = createSlice({
    name: 'userState',
    initialState: initUser,
    reducers: {
        addUser(state, action) {
            const user = action.payload.user;
            if (user) {
                const { _userID, email, accessToken } = user;
                const newState = { _userID, email, accessToken };
                
                return newState;
            }
            return state;
        },
        onUserLogout() {
            return {};
        },
    }
});

export const { addUser, onUserLogout } = userSlice.actions;
export default userSlice.reducer;