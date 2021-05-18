import { useEffect, useState } from 'react';
import NewTask from './components/NewTask';
import DisplayTask from './components/DisplayTask';
import Header from './components/Header';
import { Task } from './utils/Task';

function App() {

    const [ tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('tasks') || "[]"));
    const [ isAscendingOrder, setIsAscendingOrder] = useState(true);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const listener = (event:any) => {
            if (event.ctrlKey && event.altKey && event.code === "KeyO") changeOrder();
            // if (event.code === "ArrowUp") {}
            // if (event.code === "ArrowDown") {}
            // if (event.code === "Delete") {}
        };

        document.addEventListener("keydown", listener);
        return () => {document.removeEventListener("keydown", listener);};
    }, []);

    const addTask = (newTask:string, order:boolean) => {
        const [type, text] = splitTaskString(newTask)
        const task:Task = {
            type: type,
            text: text,
            ended: false,
            createAt: new Date(),
        };
        if (order) setTasks((oldArray) => oldArray.concat(task))
        else setTasks((oldArray) => [task].concat(oldArray))
    }

    const updateTask = () => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    const deleteTask = (task:Task) => {
        setTasks((oldArray) => oldArray.filter(t => t !== task));
    }

    const changeOrder = () => {
        setIsAscendingOrder(!isAscendingOrder);
        setTasks((oldArray) => [...oldArray].reverse());
    }

    const splitTaskString = (taskString:string) => {
        if (taskString.startsWith("!!!")) return ["important3", taskString.substr(3)]
        if (taskString.startsWith("!!")) return ["important2", taskString.substr(2)]
        if (taskString.startsWith("!")) return ["important1", taskString.substr(1)]
        
        if (taskString.startsWith("???")) return ["ask3", taskString.substr(3)]
        if (taskString.startsWith("??")) return ["ask2", taskString.substr(2)]
        if (taskString.startsWith("?")) return ["ask1", taskString.substr(1)]

        return ["normal",taskString]
    }

    return (
        <>
            <Header changeOrder={changeOrder}/>
            <main>
                <NewTask isAscendingOrder={isAscendingOrder} addTask={addTask}/>
                {tasks.map((e, id) => (
                    <DisplayTask key={id} task={e} deleteTask={deleteTask} updateTask={updateTask}/>
                ))}
            </main>
        </>
    );
}

export default App;
