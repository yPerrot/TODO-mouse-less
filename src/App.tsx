import { useEffect, useState } from 'react';
import CSS from 'csstype';
import NewTask from './components/NewTask';
import Task from './components/Task';

const appStyle: CSS.Properties = {
    maxHeight: '250px',
    width: '500px',
    boxSizing: 'border-box'
}

function App() {

    const [ tasks, setTasks] = useState<string[]>(['task1','task2']);

    const addTask = (newTask:string) => {
        setTasks((oldArray) => oldArray.concat(newTask))
        console.log(newTask);
    }

    const deleteTask = (removedTask:string) => {
        setTasks((oldArray) => oldArray.filter(task => task !== removedTask))
        console.log(removedTask);
    }

    return (
        <div style={appStyle}>
            <table><tbody>
            {tasks.map((e, id) => (
                <tr key={id}><td><Task text={e} type="" deleteTask={deleteTask}/></td></tr>
            ))}
            <tr><td><NewTask addTask={addTask}/></td></tr>
            </tbody></table>
        </div>
    );
}

export default App;
