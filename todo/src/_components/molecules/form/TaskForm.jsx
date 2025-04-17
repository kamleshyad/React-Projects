import { useState } from "react";
import { toast } from "react-toastify";

import { Textinput } from "../../atoms/forminput/Forminput";
import { Primarybutton } from "../../atoms/buttons/Buttons";

export const Taskform = ({onAddtask}) => {

    const [ input, setInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() === ''){
            return toast.error("Task cannot be empty");
        } 
        onAddtask(input);
       setInput('');
    }

    return (
        <form className='todoform' onSubmit={handleSubmit}>
            <ul className="reset">
                <li>
                    <Textinput inputType="text" placeHolder="Enter Task" inputValue={input} onChange={ (e) => setInput(e.target.value) }/>
                </li>
                <li>
                    <Primarybutton buttonType="submit">Add Task</Primarybutton>
                </li>
            </ul>
        </form>
    )
}
