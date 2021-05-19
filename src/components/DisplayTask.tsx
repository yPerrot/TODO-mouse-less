import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface propsTask {
    text: string, 
    type: string,
    date: Date,
    isFinished: boolean, 
    handleDelete: (date: Date) => void,
    handleCheck: (date: Date) => void,
}

const DisplayTask:FC<propsTask> = ({text, type, date, isFinished, handleDelete, handleCheck}) => {

    return (
        <div className={`task task-${type}`}>
            <input className="task-checkbox" type="checkbox" checked={isFinished} onChange={() => handleCheck(date)}/>
            {isFinished ? 
                <><del>{text}</del><span className="task-date">{date.toLocaleString()}</span></>  : 
                <>{text}<span className="task-date">{date.toLocaleString()}</span></>
            }
            <button className="deleteButton" onClick={() => handleDelete(date)}><FontAwesomeIcon className="icon" icon={faTrashAlt} /></button>
        </div>
    );
};

export default DisplayTask;