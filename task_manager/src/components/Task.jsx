import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import {useTasks} from "@/context/TaskContext";

export default function Task({ task }) {

    const {deleteTask, toggleDone} = useTasks()

    return (
        <div className="my-4 w-1/2 flex justify-between items-start rounded-xl py-4 px-6 shadow-lg bg-gradient-to-r from-gray-800 to-purple-800 text-white hover:scale-105 transition-all duration-300 hover:cursor-pointer">

            <div className="flex flex-col">
                <h2>
                    <span className="font-bold mx-2">Tytuł:</span>{task.title}
                </h2>
                <p>
                    <span className="font-bold mx-2">Opis:</span>{task.description}
                </p>
                <p className={`${task.isDone ? 'text-green-300' : 'text-red-300'} font-bold`}>
                    <span className="font-bold mx-2 text-white">Status:</span>
                    {task.isDone ? 'ukończone' : 'nie ukończone'}
                </p>
                <button onClick={() => toggleDone(task.id)} className={'bg-amber-300'}>{task.isDone  ? 'Oznacz jako nieukończone' : 'Oznacz jako ukończone'}</button>
            </div>

            <div className="flex flex-col items-end gap-4 text-xl ml-4">
                <button className="hover:text-red-400 transition-all duration-200 cursor-pointer"
                    onClick={()=>deleteTask(task.id)}
                >
                    <FaTrashAlt />
                </button>
                <button className="hover:text-yellow-400 transition-all duration-200 cursor-pointer">
                    <FaPencilAlt />
                </button>
            </div>

        </div>
    );
}
