'use client'
import {useEffect, useState} from "react";
import UsersList from "@/components/UsersList";
import UsersFilter from "@/components/UsersFilter";
import UsersSearch from "@/components/UsersSearch";
import AddUserForm from "@/components/AddUserForm";
export default function Home() {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [selected, setSelected] = useState('all');
 const [searchValue, setSearchValue] = useState('');

 const uniqueNames = [...new Set(users.map((user) => user.username))];


    const handleChangeOption = (value) =>{
        setSelected(value);
        console.log(value)
    }

    const handleSearchName = (value) => {
        setSearchValue(value);
        console.log(value)
    }

    const handleAddUser = (user) => {
        setUsers( [...users, user])//to co mielismy - aktualizujemy stan za pomoca spreada freda

    }

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");//istniejacy userzy w local storage
        if (storedUsers) {
            setUsers(JSON.parse(storedUsers)) //setujemy state users na podstawie json trinky winky localStorage
            setLoading(false);//skonczylo sie ustawianie wiec false dla loading
        }
        else {
            //w localstorage nie ma userow a wiec pobieramy z api
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
        }
 }, [])

 useEffect(() => {
     if (users.length > 0)
        localStorage.setItem("users", JSON.stringify(users));//to mielismy git, ustawiamy w localStorage usersow jezeli sie zmienili
 }, [users])

    if (error) return <p className={'text-red-700'}>{error.message}</p>;
    if (loading) return <p>Loading...</p>;
    return (

        <div className={'flex justify-center flex-col items-center'}>
            <h1 className={'font-bold my-4 text-center bg-green-600'}>Lista użytkowników</h1>
            <UsersFilter uniqueNames={uniqueNames} handleChangeOption={handleChangeOption} />
            <UsersSearch searchValue={searchValue} handleSearchName={handleSearchName} />
            <AddUserForm handleAddUser={handleAddUser} />
            <UsersList users={users} selected={selected} searchValue={searchValue} />

        </div>


  );
}
