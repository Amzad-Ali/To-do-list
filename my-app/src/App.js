import { useEffect, useState } from 'react';

import  './component/style.css';
import Header from './component/Header';
import AddTask from './component/AddTask'
import ShowTask from './component/ShowTask'

const App = () => {

    const [taskList , setTasklist] = useState(JSON.parse(localStorage.getItem("tasklist")) || []);
    const [task , setTask] = useState({});

    useEffect(() => {
      localStorage.setItem("tasklist", JSON.stringify(taskList))
    }, [taskList]);

   return (
    <div className='App'>
    <Header/>
    <AddTask 
    taskList={taskList} 
    setTasklist={setTasklist}
    task={task}
    setTask={setTask}
    />
    <ShowTask 
    taskList={taskList} 
    setTasklist={setTasklist}
    task={task}
    setTask={setTask}
    />
    </div>
   )
}

export default App

