import { useEffect, useState } from 'react';
import NewTask from './components/NewTask';
import DisplayTask from './components/DisplayTask';
import Tools from './components/Tools';
import Header from './components/Header';
import { Task } from './utils/Task';

function App() {

    const [ tasks, setTasks] = useState<Task[]>([]);
    const [ isAscendingOrder, setIsAscendingOrder] = useState(true);

    const addTask = (newTask:string, order:boolean) => {
        const [type, text] = splitTaskString(newTask)
        const task:Task = {
            type: type,
            text: text,
            ended: false,
            createAt: Date.now(),
        };
        if (order) {
            setTasks((oldArray) => oldArray.concat(task))
        } else {
            setTasks((oldArray) => [task].concat(oldArray))
        }
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

    const deleteTask = (removedTask:string) => {
        setTasks((oldArray) => oldArray.filter(task => task.text !== removedTask));
    }

    const changeOrder = () => {
        setIsAscendingOrder(!isAscendingOrder);
        setTasks((oldArray) => [...oldArray].reverse());
    }

    useEffect(() => {
        console.log("UseEffect: ", isAscendingOrder);
        
        const listener = (event:any) => {
            if (event.code === "KeyO") {
                changeOrder();
            }

            if (event.code === "ArrowUp") {

            }
            if (event.code === "ArrowDown") {
                
            }
            if (event.code === "Delete") {
                
            }
            
        };

        document.addEventListener("keydown", listener);
        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, []);

    return (
        <div>
            <Header />
            <Tools changeOrder={changeOrder}/>
            <NewTask isAscendingOrder={isAscendingOrder} addTask={addTask}/>

            {tasks.map((e, id) => (
                <DisplayTask key={id} task={e} deleteTask={deleteTask}/>
            ))}

        </div>
    );
}

export default App;
