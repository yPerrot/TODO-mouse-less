import { FC, MouseEvent } from 'react';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface propsTask {
    text: string,
    type: string,
    deleteTask: (task:string) => void
    // other: 
}

const iconStyle: CSS.Properties = {
    color: 'grey'
}

const taskStyle: CSS.Properties = {
    border: '3px solid red',
    borderRadius: '5px'
}

const buttonStyle: CSS.Properties = {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
}

const Task:FC<propsTask> = ({text, type, deleteTask}) => {

    const tmpDelete = (event: MouseEvent<HTMLElement>) => {
        deleteTask(text);
    }

    return (
        <div className={`task task-${type}`} style={taskStyle}>
            {text} <button style={buttonStyle} onClick={tmpDelete}><FontAwesomeIcon style={iconStyle} icon={faTrashAlt} /></button>
        </div>
    );
};

export default Task;