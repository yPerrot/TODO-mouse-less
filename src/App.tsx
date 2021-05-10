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

    const [ tasks, setTasks] = useState<string[]>([]);

    useEffect(() => {
        setTasks(['task1','task2','task3','task1','task2','task3','task1','task2','task3' ])
    }, [])

    return (
        <div style={appStyle}>
            <table><tbody>
            {tasks.map((e, id) => (
                <tr key={id}><td><Task text={e} type=""/></td></tr>
            ))}
            <tr><td><NewTask /></td></tr>
            </tbody></table>
        </div>
    );
}

export default App;
