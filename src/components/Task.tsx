import { FC } from 'react';
import CSS from 'csstype';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface propsTask {
    text: string,
    type: string,
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

const Task:FC<propsTask> = ({text, type}) => {

    return (
        <div className={`task task-${type}`} style={taskStyle}>
            {text} <button style={buttonStyle}><FontAwesomeIcon style={iconStyle} icon={faTrashAlt} /></button>
        </div>
    );
};

export default Task;