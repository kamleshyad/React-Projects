import { configureStore } from "@reduxjs/toolkit";
import TaskmanagerSlice from "./features/TaskmanagerSlice";

export const store = configureStore({
    reducer : {
        tasks : TaskmanagerSlice,
    }
})