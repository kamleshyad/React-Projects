import Swal from 'sweetalert2';
import { useState, useReducer, useEffect} from 'react';

import { TaskList } from "./TaskList";
import { Modal } from '../parts/modal/Modal';
import { EditTask } from './EditTask';

const initialState = JSON.parse(localStorage.getItem('tasks')) ?? [];

const reducer = (state, action) => {
    switch(action.type){
        case "Add-Task" :
            return [...state, handleAddtask(action.payload)];
        case "Delete-Task" :
            return state.filter((task) => {
                return(
                    task.id !== action.payload.id
                )
            })
        case "Status-Task" :
            return state.map((task) => 
                    task.id === action.payload.id ? {...task, status : true} : task
            )
        default :
            return state;
    }
}

const handleAddtask = (taskName) => {
    return{
        id : Date.now(),
        taskName : taskName,
        status : false
    }
}

export const Todo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [taskName, setTaskname] = useState("");
    const [suggestion, setSuggestion] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(state))
    }, [state])

    const handleInputChange = (e) => {
        const input = e.target.value;
        setTaskname(input);

        if(input.trim() !== ""){
            const filteredSuggestions = state.filter((tasks) => {
                return(
                    tasks.taskName.toLowerCase().includes(input.toLowerCase())
                )
            }).map((task) => task.taskName)
            setSuggestion(filteredSuggestions);
        } else {
            setSuggestion([]);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedTask = taskName.trim();
        
        if(trimmedTask === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Task Name cannot be empty!",
            })
            return;
        }

        const taskExits = state.some((tasks) => {
            return(
                tasks.taskName.toLowerCase() === trimmedTask.toLocaleLowerCase()
            )
        })
        if(taskExits){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Task Name already Exists !",
            });
            return setTaskname("");
        }

        dispatch({type: "Add-Task", payload : taskName});
        Swal.fire({
            icon: "success",
            text: "Task Name added Successfully!",
        });
        setTaskname("");
    }

    const handleCurrentTask = (currentData) => {
        setCurrentTask(currentData);
        setIsOpen(true);
    }

    const handleEdittask = (updatedTaskname) => {
        dispatch({type: "Edit-Task", payload: updatedTaskname})
    }

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo</h1>
                    <form className='todoform' onSubmit={(e) => handleSubmit(e)}>
                        <ul className="reset">
                            <li>
                                <input type="text" placeholder='Add Task' value={taskName} onChange={handleInputChange}/>
                                {suggestion.length > 0 && (
                                    <div className="suggestionsec">
                                        <ul className=" reset">
                                        {suggestion.map((suggestions, index) => (
                                            <li key={index} onClick={() => setTaskname(suggestions) }>
                                                {suggestions}
                                            </li>
                                        ))}
                                    </ul>
                                    </div>
                                )}
                            </li>
                            <li>
                                <button>Add Task</button>
                            </li>
                        </ul>
                    </form>
                    <TaskList taskData={state} dispatch={dispatch} getCurrentTask={(currentData) => handleCurrentTask(currentData) }/>
                </div>
            </div>
            {
                isOpen && (
                    <Modal onClose={() => setIsOpen(false)}>
                        <EditTask task={currentTask} getupdatedData={(updatedTaskname) => handleEdittask(updatedTaskname)}/>
                    </Modal>
                )
            }
        </div>
    )
}
