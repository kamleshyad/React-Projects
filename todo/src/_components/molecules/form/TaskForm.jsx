import { useState } from "react";
import { toast } from "react-toastify";

import { Input } from "../../atoms/forminput/Forminput";
import { PrimaryButton } from "../../atoms/buttons/Buttons";

export const Taskform = ({onAddtask}) => {

    const [ input, setInput ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.trim() === ''){
            return toast.error('Task Cannot be empty');
        }
        onAddtask(input);
        setInput('');
    }

    return (
        <form className='todoform' onSubmit={handleSubmit}>
            <ul className="reset">
                <li>
                    <Input type="text" placeholder="Enter Task" value={input} onChange={ (e) => setInput(e.target.value)}/>
                </li>
                <li>
                    <PrimaryButton>Enter Task</PrimaryButton>
                </li>
            </ul>
        </form>
    )
}
