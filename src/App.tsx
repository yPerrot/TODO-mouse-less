import { useEffect, useState } from 'react';
import NewTask from './components/NewTask';
import DisplayTask from './components/DisplayTask';
import Header from './components/Header';
import { Task } from './utils/Task';

function App() {

    const [ tasks, setTasks] = useState<Task[]>(JSON.parse(localStorage.getItem('tasks') || "[]"));
    const [ isAscendingOrder, setIsAscendingOrder] = useState(true);

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

    const handleDelete = (taskId: number) => {
        setTasks(oldArray => oldArray.filter((_, i) => i !== taskId));
    }

    const handleCheck = (taskId: number) => {
        setTasks(oldArray => oldArray.map((task, id) => {
            if (id === taskId) return Object.assign({}, task, {ended: !task.ended});
            return task
        }))
    }

    const changeOrder = () => {
        setIsAscendingOrder(!isAscendingOrder);
        setTasks((oldArray) => [...oldArray].reverse());
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        const listener = (event:any) => {
            const activeElem = document?.activeElement
            
            if (event.ctrlKey && event.altKey && event.code === "KeyO") changeOrder();
            else if (event.code === "Delete" && activeElem?.tagName === "DIV") {
                const taskId = activeElem?.getAttribute('data-id')
                handleDelete(Number(taskId))
            } else if (event.ctrlKey && event.altKey && event.code === "KeyD") {
                const taskId = activeElem?.getAttribute('data-id')
                handleCheck(Number(taskId))
            }
        };

        document.addEventListener("keydown", listener);
        return () => {document.removeEventListener("keydown", listener);};
    });

    const splitTaskString = (taskString:string) => {
        if (taskString.startsWith("!!!")) return ["urgent3", taskString.substr(3)]
        if (taskString.startsWith("!!")) return ["urgent2", taskString.substr(2)]
        if (taskString.startsWith("!")) return ["urgent1", taskString.substr(1)]
        
        if (taskString.startsWith("???")) return ["ask3", taskString.substr(3)]
        if (taskString.startsWith("??")) return ["ask2", taskString.substr(2)]
        if (taskString.startsWith("?")) return ["ask1", taskString.substr(1)]
        
        if (taskString.startsWith("+++")) return ["main3", taskString.substr(3)]
        if (taskString.startsWith("++")) return ["main2", taskString.substr(2)]
        if (taskString.startsWith("+")) return ["main1", taskString.substr(1)]
        
        if (taskString.startsWith("***")) return ["validate3", taskString.substr(3)]
        if (taskString.startsWith("**")) return ["validate2", taskString.substr(2)]
        if (taskString.startsWith("*")) return ["validate1", taskString.substr(1)]

        return ["normal",taskString]
    }

    return (
        <>
            {console.log(tasks)}
            <Header isAscendingOrder={isAscendingOrder} changeOrder={changeOrder}/>
            <main>
                <NewTask isAscendingOrder={isAscendingOrder} addTask={addTask}/>
                {tasks.map((task, id) => (
                    <DisplayTask key={id} 
                        text={task.text} type={task.type} 
                        date={task.createAt} isFinished={task.ended} 
                        id={id}
                        handleDelete={handleDelete} handleCheck={handleCheck}
                    />
                ))}
            </main>
        </>
    );
}

export default App;
