import { createSlice } from '@reduxjs/toolkit';

const isLoading = false;

const loaderSlice = createSlice({
    name: 'loaderState',
    initialState: isLoading,
    reducers: {
        startLoading(state) {
            return true;
        },
        stopLoading(state){
            return false;
        }
    }
});

export const { startLoading, stopLoading } = loaderSlice.actions;
export default loaderSlice.reducer;