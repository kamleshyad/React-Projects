import { useState } from 'react';
import './Todo.css';

export const Todo = () => {

    const [taskName, setTaskName] = useState("");

    const handleOnChange = (e) => {
        setTaskName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <form className='todoform' onSubmit={(e) => handleSubmit(e)}>
                        <ul className="reset">
                            <li>
                                <input type="text" name="taskName" placeholder="Add Task" value={taskName} onChange={(e) => handleOnChange(e)}/>
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
