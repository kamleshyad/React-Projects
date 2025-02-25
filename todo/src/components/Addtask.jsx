import { useState } from "react";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { addtask } from "../redux/features/TaskmanagerSlice";

export const Addtask = () => {

    const [taskName, setTaskName] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmedTask = taskName.trim();

        if (trimmedTask === "") {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Task name cannot be empty!",
            });
            return;
        }

        dispatch(addtask(trimmedTask));
        Swal.fire({
            title: "Task Added Successfully!",
            icon: "success",
        });
        setTaskName("");
    }

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <form className='todoform' onSubmit={(e) => handleSubmit(e)}>
                        <ul className="reset">
                            <li>
                                <input type="text" placeholder="Add Task" value={taskName} onChange={(e) => setTaskName(e.target.value)}/>
                            </li>
                            <li>
                                <button>Add Task</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}
