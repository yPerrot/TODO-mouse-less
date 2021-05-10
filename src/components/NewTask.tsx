import { FC, useEffect, useState, useRef } from 'react';

interface propsNewTask {
    addTask: (task: string) => void
}

const NewTask:FC<propsNewTask> = ({ addTask }) => {

    const [inputString, setInputString] = useState('');
    const inputStringRef = useRef(inputString); // Use useRef to have access to my state in listener

    useEffect(() => {
        console.log("UseEffect");
        
        const listener = (event:any) => {
            if (event.code === "Enter" || event.code === "NumpadEnter") {
                event.preventDefault();
                addTask(inputStringRef.current);
                setInputString('');
            }
        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <input type="string" value={inputString} placeholder="New Task ..." onChange={(e) => {setInputString(e.target.value); inputStringRef.current = e.target.value}}/>
    )
};

export default NewTask;