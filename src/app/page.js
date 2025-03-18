'use client'
import {useEffect, useState} from "react";
import UsersList from "@/components/UsersList";
import UsersFilter from "@/components/UsersFilter";
export default function Home() {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
   const fetchUsers = async () => {
     try {
       const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw Error('Unable to fetch users');
        }
        const data = await response.json();
        setUsers(data);
     }
     catch(error) {
       setError(error);
     }
     finally {
       setLoading(false);
     }
   }
   fetchUsers();
 }, [])

    if (error) return <p className={'text-red-700'}>{error.message}</p>;
    if (loading) return <p>Loading...</p>;
    return (
        <div className={'flex justify-center flex-col items-center'}>
            <h1 className={'font-bold my-4 text-center bg-green-600'}>Lista użytkowników</h1>
            <UsersFilter users={users} />
            <UsersList users={users} />
        </div>


  );
}
