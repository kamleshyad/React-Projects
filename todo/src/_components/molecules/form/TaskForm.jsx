import { Forminput } from "../../atoms/forminput/FormInput";
import { Primarybutton } from "../../atoms/buttons/Buttons";
import { useState } from "react";

export const Taskform = ({onAddtask}) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(input.trim() === '') return;

        onAddtask(input);
        setInput('');
    }

    return (
        <form className='todoform' onSubmit={handleSubmit}>
            <ul className="reset">
                <li>
                    <Forminput inputType="text" placeHolder="Enter Task" inputValue={input} onchange={ (e) => setInput(e.target.value) }/>
                </li>
                <li>
                    <Primarybutton buttonType="submit">Add Task</Primarybutton>
                </li>
            </ul>
        </form>
    )
}
