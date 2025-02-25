import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const handleAddtask = (taskName) => {
    return{
        id : Date.now(),
        taskName : taskName,
        status : false,
    }
}

export const TaskmanagerSlice = createSlice({
    name : "taskmanager",
    initialState,
    reducers : {
        addtask : (state, action) => {
            const newTask = handleAddtask(action.payload);
            state.push(newTask); 
            console.log("Updated state:", JSON.parse(JSON.stringify(state))); 
        }
    }
})

export const {addtask} = TaskmanagerSlice.actions;

export default TaskmanagerSlice.reducer;