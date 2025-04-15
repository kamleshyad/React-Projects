import { useReducer } from 'react';

import { Tasklist } from '../../molecules/tasklist/tasklist';
import { TaskForm } from '../../molecules/form/TaskForm';

const initialState = [];

const reducer = (state, action) => {
    switch(action.type){
        case 'add-task' :
            return [...state, createTask(action.payload.name)]
        case 'delete-task' :
            return state.filter( task => task.id !== action.payload.id);
        default :
            return state;
    }
}

const createTask = (name) => {
    return {
        id: Date.now(),
        name: name,
        status: false
    }
}


export const AddTask = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addTask = (taskName) => {
        dispatch( {type: 'add-task', payload: {name: taskName}} )
    }

    const deleteTask = (taskId) => {
        dispatch( {type: 'delete-task', payload: {id: taskId}} )
    }

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <TaskForm onAddtask={addTask}/>
                    <Tasklist taskList={state} onDelete={deleteTask}/>
                </div>
            </div>
        </div>
    );
};
