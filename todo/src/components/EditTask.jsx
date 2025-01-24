import { useState } from "react";

export const EditTask = ({task, getupdatedData}) => {

    const [newTaskname, setNewTaskname] = useState(task.taskName);

    const handleEditsubmit = (e) =>{
        e.preventDefault();

        if(newTaskname.trim() === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Task Name cannot be empty!",
            });
            return;
        }
        getupdatedData(newTaskname.trim())
    }

    return (
        <div className="edittasksec">
            <h1>Edit Task</h1>
            <form className='editform' onSubmit={(e) => handleEditsubmit(e)}>
                    <ul className="reset" >
                        <li>
                            <input type="text" value={newTaskname} onChange={(e) => setNewTaskname(e.target.value)}/>
                        </li>
                        <li>
                            <button type="submit">Update Task</button>
                        </li>
                    </ul>
                </form>
        </div>
    )
}
