import { useReducer, useState } from "react";
import { toast } from "react-toastify";

import { Taskform } from "../../molecules/form/Taskform";
import { Tasklist } from "../../molecules/tasklist/Tasklist";
import { ConfirmModal } from "../../molecules/modal/ConfirmModal";

const initialState = [];

const reducer = (state, action) => {
    switch(action.type) {
        case 'add-task' :
            return [...state, createNewtask(action.payload.taskName)];
        case 'delete-task' :
            return state.filter((task) => task.id !== action.payload.deleteTaskid )
        default :
            return state;
    }
}

const createNewtask = (taskName) => {
    return{
        id: Date.now(),
        taskName: taskName,
        status: false,
    }
}

export const Addtask = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ deleteId, setDeleteid ] = useState(null);
    const [ isConfirmopen, setIsconfirmopen ] = useState(false);

    const addTask = (task) => {
        dispatch( {type: 'add-task', payload: {taskName: task}} );
        toast.success("Task added Succesfully");
    }

    const getDeletetaskid = (taskId) => {
        setDeleteid(taskId);
        setIsconfirmopen(true) 
    }

    const confirmDelete = () => {
        dispatch({type: 'delete-task', payload: {deleteTaskid: deleteId}})
        toast.success("Task deleted successfully");
        setIsconfirmopen(false);
        setDeleteid(null);
    }


    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <Taskform onAddtask={addTask}/>
                    <Tasklist taskList={state} onDeletetask={getDeletetaskid}/>
                    {
                        isConfirmopen && (
                            <ConfirmModal message="Are you sure to delete" onClose={() => setIsconfirmopen(false)} onConfirm={confirmDelete}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
