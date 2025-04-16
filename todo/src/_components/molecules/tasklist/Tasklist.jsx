import { Primarybutton } from "../../atoms/buttons/Buttons";
import { SecondaryButton } from "../../atoms/buttons/Buttons";

import { EditIcon } from "../../atoms/icons/Icon";
import { DeleteIcon } from "../../atoms/icons/Icon";

export const Tasklist = ({taskList, onDeletetask, onEditTask}) => {

    return (
        <div className="tasklist">
            <ul className="reset">
                {
                    taskList.map((item) => {

                        const {id, taskName} = item

                        return(
                            <li key={id}>
                                <div className="taskleftsec">
                                    <p>{taskName}</p>
                                </div>
                                <div className="taskrightsec">
                                    <ul className="reset">
                                        <li>
                                            <Primarybutton buttonType="button" customStyle={{fontSize : '16px', padding: '8px 12px'}} onclick={ () => onEditTask(id, taskName) }><EditIcon /></Primarybutton>
                                        </li>
                                        <li>
                                            <SecondaryButton buttonType="button" customStyle={{fontSize : '16px', padding: '8px 12px'}} onclick={() => onDeletetask(id) }><DeleteIcon /></SecondaryButton>
                                        </li>
                                    </ul>
                                </div>
                            </li>   
                        )
                    })
                }
            </ul>
        </div>
    )
}
