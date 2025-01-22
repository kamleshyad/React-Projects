import { useReducer, useState, useEffect } from "react";
import Swal from "sweetalert2";

import { TaskList } from "./TaskList";

const initialState = JSON.parse(localStorage.getItem("tasks"))?? [];

const reducer = (state, action) => {
    switch(action.type) {
        case "Add-Task" :
            return [...state, handleAddtask(action.payload)]
        default:
            return state;
    }
}

const handleAddtask = (task) => {
    return {
        id : Date.now(),
        taskName : task,
        status : false
    }
}

export const Todo = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const [taskName, setTaskName] = useState("");
    const [suggestion, setSuggestion] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks" , JSON.stringify(state))
    }, [state]);

    const handleInputChange = (e) => {
        const input = e.target.value;
        setTaskName(input);
    
        if (input.trim() !== "") {
            const filteredSuggestions = state
                .filter((task) =>
                    task.taskName.toLowerCase().includes(input.toLowerCase())
                )
                .map((task) => task.taskName);
            setSuggestion(filteredSuggestions);
        } else {
            setSuggestion([]);
        }
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedTaskname = taskName.trim();

        if(trimmedTaskname === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Task Name cannot be empty!",
            });
            return;
        }

        const taskExits = state.some((task) => {
            return (
                task.taskName.toLowerCase() === trimmedTaskname.toLowerCase()
            )
        })

        if(taskExits){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Task Name already Exists !",
            });
            return setTaskName("");
        }

        dispatch({type : "Add-Task", payload : taskName})
        Swal.fire({
            icon: "success",
            text: "Task Name added Successfully!",
        });
        setTaskName("");
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
                                    <ul className="suggestion-box reset">
                                        {suggestion.map((suggestions, index) => (
                                            <li key={index} onClick={() => setTaskName(suggestions) }>
                                                {suggestions}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                            <li>
                                <button>Add Task</button>
                            </li>
                        </ul>
                    </form>
                    <TaskList taskData={state}/>
                </div>
            </div>
        </div>
    )
}
