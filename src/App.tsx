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
    const [ isAscendingOrder, setIsAscendingOrder] = useState(true);

    const addTask = (newTask:string, order:boolean) => {
        if (order) {
            setTasks((oldArray) => oldArray.concat(newTask))
        } else {
            setTasks((oldArray) => [newTask].concat(oldArray))
        }
    }

    const deleteTask = (removedTask:string) => {
        setTasks((oldArray) => oldArray.filter(task => task !== removedTask));
        console.log(removedTask);
    }

    const changeOrder = () => {
        setIsAscendingOrder(!isAscendingOrder);
        setTasks((oldArray) => [...oldArray].reverse());
    }

    return (
        <div style={appStyle}>
            <table><tbody>
            <tr><td>
                <button onClick={changeOrder}>Change order</button>
            </td></tr>
            <tr><td>
                <NewTask isAscendingOrder={isAscendingOrder} addTask={addTask}/>
            </td></tr>
            {tasks.map((e, id) => (
                <tr key={id}><td>
                    <Task text={e} type="" deleteTask={deleteTask}/>
                </td></tr>
            ))}
            </tbody></table>
        </div>
    );
}

export default App;
