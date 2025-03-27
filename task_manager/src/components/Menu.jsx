'use client'

import {useTasks} from "@/context/TaskContext";

export default function Menu() {
    const {possibleFilters} = useTasks()

    return (
        <div className='text-center'>
            {possibleFilters.map((filter, index)=>(
                <button
                    className={'  m-2 px-4 py-2 rounded font-semibold' +
                        ' transition-all duration-300 bg-purple-600 text-white hover:bg-purple-700 hover:scale-105 cursor-pointer'}
                    key={index}> {filter}</button>
            ))}
        </div>
    )
}