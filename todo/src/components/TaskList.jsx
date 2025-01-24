import { EditIcon } from "../parts/icons/Icon";
import { CompleteIcon } from "../parts/icons/Icon";
import { DeleteIcon } from "../parts/icons/Icon";
import Swal from "sweetalert2";

export const TaskList = ({taskData, dispatch, getCurrentTask}) => {

    const currentTaskData = ( currentData ) =>{
        getCurrentTask(currentData)
    }

    const taskStatus = (taskId) => {
        dispatch({type : "Status-Task", payload : {id : taskId}})
    }

    const deletetask = (taskId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({type: "Delete-Task", payload : {id : taskId}})
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
          });
    }

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
                                                        <button className="edit" onClick={() => currentTaskData(taskItem)}>
                                                            <EditIcon />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="iconbox">
                                                        <button className="complete" onClick={() => taskStatus(taskItem.id, taskItem.status)}>
                                                            <CompleteIcon />
                                                        </button>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="iconbox">
                                                        <button className="delete" onClick={() => deletetask(taskItem.id)}>
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
