import { FC, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../utils/Task';

interface propsTask {
    task: Task,
    deleteTask: (task:Task) => void,
    updateTask: () => void,
}

const DisplayTask:FC<propsTask> = ({task, deleteTask, updateTask}) => {

    const [isEnded, setIsEnded] = useState(task.ended);

    useEffect(() => {
        updateTask();
    }, [isEnded])

    const handleClick = () => {
        setIsEnded(!isEnded);
        task.ended = !task.ended
    }

    return (
        <div className={`task task-${task.type}`}>
            <input className="task-checkbox" type="checkbox" checked={isEnded} onChange={handleClick}/>
            {isEnded ? 
                <><del>{task.text}</del><span className="task-date">{task.createAt.toLocaleString()}</span></>  : 
                <>{task.text}<span className="task-date">{task.createAt.toLocaleString()}</span></>
            }
            <button className="deleteButton" onClick={() => deleteTask(task)}><FontAwesomeIcon className="icon" icon={faTrashAlt} /></button>
        </div>
    );
};

export default DisplayTask;