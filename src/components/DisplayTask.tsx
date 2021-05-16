import { FC, MouseEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../utils/Task';

interface propsTask {
    task: Task,
    deleteTask: (task:string) => void,
    next?: string, 
    previous?: string
}

const DisplayTask:FC<propsTask> = ({task, deleteTask}) => {

    const [isEnded, setIsEnded] = useState(false);

    const tmpDelete = (event: MouseEvent<HTMLElement>) => {
        deleteTask(task.text);
    }

    return (
        <div className={`task task-${task.type}`}>
            <input className="task-checkbox" type="checkbox" onChange={() => {setIsEnded(!isEnded)}}/>
            {isEnded ? <span><del>{task.text}</del></span> : <span>{task.text}</span>}
            <button className="deleteButton" onClick={tmpDelete}><FontAwesomeIcon className="icon" icon={faTrashAlt} /></button>
        </div>
    );
};

export default DisplayTask;