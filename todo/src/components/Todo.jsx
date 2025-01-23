import Swal from 'sweetalert2';
import { useState, useReducer, useEffect} from 'react';

import { TaskList } from "./TaskList";

const initialState = JSON.parse(localStorage.getItem('tasks')) ?? [];

const reducer = (state, action) => {
    switch(action.type){
        case "Add-Task" :
            return [...state, handleAddtask(action.payload)]
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
                    <TaskList taskData={state}/>
                </div>
            </div>
        </div>
    )
}
