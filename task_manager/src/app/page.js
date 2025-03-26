import TaskList from "@/components/TaskList";
import AddTask from "@/components/AddTask";


export default function Home() {
  return (
    <>
      <h1 className={'text-center font-bold text-lg'}>Zarządzanie zadaniami</h1>
        <AddTask />
        <TaskList />
    </>
  )
}
