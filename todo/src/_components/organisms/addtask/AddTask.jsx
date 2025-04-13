import { useReducer } from 'react';

import { Tasklist } from '../../molecules/tasklist/tasklist';
import { TaskForm } from '../../molecules/form/TaskForm';

const initialState = [];

const reducer = (state, action) => {
    switch(action.type){
        case 'add-task' :
            return [...state, createTask(action.payload.name)]
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

    console.log("state", state)

    return (
        <div className="todosec">
            <div className="container">
                <div className="todowrap">
                    <h1>Todo List</h1>
                    <TaskForm onAddtask={addTask}/>
                    <Tasklist taskList={state}/>
                </div>
            </div>
        </div>
    );
};
