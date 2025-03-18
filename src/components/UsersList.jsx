import UsersFilter from "@/components/UsersFilter";
import {useState} from "react";

export default function UsersList({users, selected }){
    const [isToggledDown, setIsToggledDown] = useState({});
    const filteredUsers = selected==="all" ? users : users.filter(user=>user.username.toLowerCase()===selected.toLowerCase());

    const handleToggleDown = (userId) => {
        setIsToggledDown(prevState => ({
            ...prevState,
            [userId]: !prevState[userId],
        }));
    }


    return (
        <>




            <div className={'flex justify-center flex-row items-center flex-wrap '}>

                {filteredUsers.map((user) => (
                    <div className={' w-40 h-40 mx-4 px-2 border my-4 rounded-2xl'} key={user.id}>
                        <h2 className={'text-center my-2 font-bold break-words'}>{user.name}</h2>
                        <p className={'text-center break-words'}>{user.username}</p>
                        <p className={'text-center break-words'}>{user.email}</p>
                        <p className={'text-center break-words'}>{user.address.street}</p>
                        {(isToggledDown[user.id]) && (
                            <p>{user.phone}</p>

                        )}
                        <button
                            className={'border-2'}
                            onClick={()=>handleToggleDown(user.id)}
                        >{isToggledDown[user.id] ? "ukryj" : "pokaż"} szczegóły</button>
                    </div>
                ))}
            </div>
        </>
    )
}