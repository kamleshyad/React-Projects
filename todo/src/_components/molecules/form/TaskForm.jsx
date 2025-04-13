import { useState } from "react";

import { TextInput } from "../../atoms/formInput/FormInput";
import { PrimaryButton } from "../../atoms/buttons/Buttons";

export const TaskForm = ({onAddtask}) => {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input.trim() === '') return;
        onAddtask(input);
        setInput('');
    }

    return (
        <form className='todoform' onSubmit={handleSubmit}>
            <ul className="reset">
                <li>
                    <TextInput inputType="text" placeHolder="Enter Task" inputValue={input} onChange={(e) => setInput(e.target.value)} />
                </li>
                <li>
                    <PrimaryButton buttonType="submit">Add Task</PrimaryButton>
                </li>
            </ul>
        </form>
    );
};