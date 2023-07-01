import { configureStore } from "@reduxjs/toolkit";
import volume_slice from "./slices/volume_slice";
import filter_slice from "./slices/filter_slice";
import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";
const store = configureStore({
    reducer: {
        volumeReducer:volume_slice,
        filterReducer:filter_slice,
    }
})
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;