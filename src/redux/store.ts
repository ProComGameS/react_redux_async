import { configureStore } from "@reduxjs/toolkit";
import sessionReducer from "./sessionSlide";
import thunkMiddleware from "redux-thunk";
import type { Middleware } from "redux";


export const store = configureStore({
    reducer: {
        session: sessionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware as unknown as Middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
