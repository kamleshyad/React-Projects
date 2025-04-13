import { PrimaryButton } from "../../atoms/buttons/Buttons";
import { SecondaryButton } from "../../atoms/buttons/Buttons";
import { EditIcon } from "../../atoms/icons/Icon";
import { DeleteIcon } from "../../atoms/icons/Icon";

export const Tasklist = ({taskList}) => {

    return (
        <div className="tasklist">
            <ul className="reset">
                {
                    taskList.map((item) => {
                        const {id, name} = item
                        return(
                            <li key={id}>
                                <div className="taskleftsec">
                                    <p>{name}</p>
                                </div>
                                <div className="taskrightsec">
                                    <ul className="reset">
                                        <li>
                                            <PrimaryButton buttonType="submit" customStyle={{fontSize : '16px', padding: '8px 12px'}}>
                                                <EditIcon />
                                            </PrimaryButton>
                                            </li>
                                        <li>
                                            <SecondaryButton buttonType="submit" customStyle={{fontSize : '16px', padding: '8px 12px'}}>
                                                <DeleteIcon />
                                            </SecondaryButton>
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
