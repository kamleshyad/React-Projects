import { EditIcon } from "../parts/icons/Icon";
import { CompleteIcon } from "../parts/icons/Icon";
import { DeleteIcon } from "../parts/icons/Icon";

export const TaskList = ({taskData}) => {
    return (
        <div className="tasklist">
            {
                taskData && taskData.length > 0 ? (
                    <ul className="reset">
                        {
                            taskData.filter((taskItem) => taskItem && taskItem.taskName).reverse().map((taskItem, index) => {
                                return(
                                    <li key={taskItem.id ?? index}>
                                        <div className="taskleftsec">
                                            <p>{taskItem.taskName}</p>
                                        </div>
                                        <div className="taskrightsec">
                                            <ul className="reset">
                                                <li>
                                                    <div className="iconbox">
                                                        <button className="edit">
                                                            <EditIcon />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="iconbox">
                                                        <button className="complete">
                                                            <CompleteIcon />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="iconbox">
                                                        <button className="delete">
                                                            <DeleteIcon />
                                                        </button>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                ) : (
                    <p className="empty-message">No tasks available. Please add some tasks!</p>
                )
            }  
        </div>
    )
}
