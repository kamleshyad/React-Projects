import { useState } from "react"


export const Addtask = () => {

    const [taskName, setTaskName] = useState("");

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <form className='todoform'>
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
