'use client'
import Task from "@/components/Task";
import {useTasks} from "@/context/TaskContext";

export default function TaskList() {
    const {tasks} = useTasks()
    if (tasks.length === 0) return <p className={'text-center my-2 font-bold'}>Brak zadań do wykonania - można grać w fife</p>
    return (
        <div className={'flex flex-col justify-center items-center'} >
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}