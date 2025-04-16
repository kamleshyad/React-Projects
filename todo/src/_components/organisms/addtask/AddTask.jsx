import { useReducer, useState } from "react"
import { Taskform } from "../../molecules/form/Taskform";
import { Tasklist } from "../../molecules/tasklist/Tasklist";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "../../molecules/modal/Modal";

const initialState = [];

const reducer = (state, action) => {
    switch(action.type) {
        case 'add-task' :
            return [...state, createTask(action.payload.name)];
        
        case 'delete-task' :
            return state.filter( task => task.id !== action.payload.currentId);

        case 'edit-task' :
            return state.map((task) => task.id === action.payload.currentId ? {...task, taskName: action.payload.currentTask} : task );

        default :
            return state;
    }
}

const createTask = (name) => {
    return{
        id: Date.now(),
        taskName: name,
        status: false
    }
}

export const Addtask = () => {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const [ modalOpen, setModalopen] = useState(false);
    const [ deleteTaskid, setDeletetaskid] = useState(null)

    const addTask = (taskName) => {
        dispatch({ type: 'add-task', payload: {name: taskName}})
        toast.success("Task added successfully!");
    }

    const getTaskdeleteId = (taskId) => {
        setModalopen(!modalOpen);
        setDeletetaskid(taskId)
    }

    const editTask = (taskId, taskName) => {
        dispatch({ type: 'edit-task', payload: {currentId: taskId, currentTask: taskName}})
    }

    const confirmDelete = () => {
        dispatch({ type: 'delete-task', payload: { currentId: deleteTaskid } });
        toast.error("Task removed successfully!");
        setModalopen(false);
        deleteTaskid(null);
    };

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <Taskform onAddtask={addTask} />
                    <Tasklist taskList={state} onDeletetask={getTaskdeleteId} onEditTask={editTask}/>
                </div>
            </div>
            {
                modalOpen ? <Modal onClose={() => setModalopen(false)} modalMessage="Are you sure you want to delete this task?" onConfirm={confirmDelete} /> : null
            }
            
            <ToastContainer />
        </div>
    )
}
