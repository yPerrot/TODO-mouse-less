import { FC, useEffect, useState, useRef } from 'react';

interface propsNewTask {
    isAscendingOrder: boolean,
    addTask: (task: string, isAscendingOrder: boolean) => void
}

const NewTask:FC<propsNewTask> = ({ addTask, isAscendingOrder }) => {

    const [inputString, setInputString] = useState('');
    const inputStringRef = useRef(inputString); // Use useRef to have access to my state in listener

    useEffect(() => {
        const listener = (event:any) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                if (inputStringRef.current !== '') {
                    addTask(inputStringRef.current, isAscendingOrder);
                    setInputString('');
                    inputStringRef.current = '';
                }
            }
        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [isAscendingOrder, addTask]);

    return (
        <div className="new-task-container">
            <textarea 
                className="new-task" 
                rows={1} 
                value={inputString} placeholder="New Task ..." autoFocus={true}
                onChange={(e) => {setInputString(e.target.value); inputStringRef.current = e.target.value}}
            />
        </div>
    )
};

export default NewTask;