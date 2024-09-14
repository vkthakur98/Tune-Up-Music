import { configureStore } from "@reduxjs/toolkit";
import songReducer from "../features/songSlice";

export const store = configureStore({
    reducer:songReducer
})