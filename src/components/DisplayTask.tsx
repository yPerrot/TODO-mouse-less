import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

interface propsTask {
    text: string, 
    type: string,
    date: Date,
    isFinished: boolean, 
    id: number
    handleDelete: (taskId: number) => void,
    handleCheck: (taskId: number) => void,
}

const DisplayTask:FC<propsTask> = ({text, type, date, isFinished, id, handleDelete, handleCheck}) => {

    return (
        <div className={`task task-${type}`} tabIndex={0} data-id={id}>
            <input 
                className="task-checkbox" type="checkbox" 
                checked={isFinished} onChange={() => handleCheck(id)}
                tabIndex={-1}
            />
            {isFinished ? 
                <><del>{text}</del><span className="task-date">{date.toLocaleString()}</span></>  : 
                <>{text}<span className="task-date">{date.toLocaleString()}</span></>
            }
            <button 
                className="deleteButton" 
                onClick={() => handleDelete(id)}
                tabIndex={-1}
            >
                <FontAwesomeIcon className="icon" icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default DisplayTask;