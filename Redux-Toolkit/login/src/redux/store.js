import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import authReducer from "../features/AuthSlice"; // Ensure this path is correct

// Persist Config
const persistConfig = {
    key: "auth",
    storage,
};

// Create a persisted reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Required for redux-persist
        }),
});

// Create a persistor
export const persistor = persistStore(store);
