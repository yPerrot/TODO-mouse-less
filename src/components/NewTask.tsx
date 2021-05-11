import { FC, useEffect, useState, useRef } from 'react';

interface propsNewTask {
    isAscendingOrder: boolean,
    addTask: (task: string, isAscendingOrder: boolean) => void
}

const NewTask:FC<propsNewTask> = ({ addTask, isAscendingOrder }) => {

    const [inputString, setInputString] = useState('');
    const inputStringRef = useRef(inputString); // Use useRef to have access to my state in listener

    useEffect(() => {
        console.log("UseEffect: ", isAscendingOrder);
        
        const listener = (event:any) => {
            if ((event.code === "Enter" || event.code === "NumpadEnter") && inputStringRef.current !== '') {
                event.preventDefault();
                addTask(inputStringRef.current, isAscendingOrder);
                setInputString('');
                inputStringRef.current = '';
            }
        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [isAscendingOrder]);

    return (
        <input type="string" value={inputString} placeholder="New Task ..." onChange={(e) => {setInputString(e.target.value); inputStringRef.current = e.target.value}}/>
    )
};

export default NewTask;