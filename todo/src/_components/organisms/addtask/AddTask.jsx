import { useReducer, useState } from "react";
import { Taskform } from "../../molecules/form/Taskform";
import { Tasklist } from "../../molecules/tasklist/Tasklist";
import { ConfirmModal } from "../../molecules/modal/ConfirmModal";
import { toast } from "react-toastify";

const initialState = {
    tasks: [],
    deleteId: null,
    isConfirm: false
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'add-task' :
            return {
                ...state,
                tasks: [ ...state.tasks, createTask(action.payload.taskName) ],
            }
        case 'show-confirm-modal' :
            return{
                ...state,
                deleteId: action.payload.id,
                isConfirm: true
            }
        case 'hide-confirm-modal' :
            return {
                ...state,
                deleteId: null,
                isConfirm: false
            }
        case 'delete-task' : 
            return {
                ...state,
                tasks: [state.tasks.filter((task) => task.id !== action.payload.taskId)],
                deleteId: null,
                isConfirm: false
            }
        default :
            return state;
    }
}

const createTask = (task) => {
    return{
        id: Date.now(),
        taskname: task,
        status: false,
    }
}


export const Addtask = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    const addTask = (task) => {
        dispatch( {type: 'add-task', payload: {taskName: task}} );
        toast.success("Task Added Successfully");
    }

    const getDeleteid = (getDeleteid) => {
        dispatch({type: 'show-confirm-modal', payload: {id: getDeleteid}})
    }

    const closeModal = () => {
        dispatch({type: 'hide-confirm-modal',})
    }

    const confirmDelete = () => {
        dispatch({type: 'delete-task', payload: {taskId: state.deleteId}});
        toast.success("Task added Successfully");
    }


    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <Taskform onAddtask={addTask}/>
                    <Tasklist taskList={state.tasks} getDeleteid={getDeleteid}/> 
                    {
                        state.isConfirm && (
                            <ConfirmModal message="Are you sure to Delete" onClose={closeModal} onConfirm={confirmDelete}/>
                        )
                    }
                </div>
            </div>
        </div>
    )   
}