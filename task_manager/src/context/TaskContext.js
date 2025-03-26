'use client'
import {createContext, useContext, useState} from "react";
import data from "../data/tasks.json"

const TaskContext = createContext(null)

export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState(data);

    const addNewTask = (values)=>{
        const newTask = {
            id: Date.now(),
            title: values.title,
            description: values.description,
            isDone: values.isDone,
        }
        setTasks([...tasks, newTask]);
        console.log(tasks)
    }

    const deleteTask = (id) => {
        setTasks(prev=>prev.filter(task => task.id !== id))
    }

    return (
        <TaskContext.Provider value={{
            addNewTask,
            deleteTask,
            tasks
        }}>
            {children}
        </TaskContext.Provider>
    )
}
export const useTasks = () => useContext(TaskContext);