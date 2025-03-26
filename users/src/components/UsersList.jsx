import {useEffect, useState} from "react";

export default function UsersList({users, selected, searchValue }){
    const [isToggledDown, setIsToggledDown] = useState({});
    const [isFilterActive , setIsFilterActive] = useState("");

    const filteredUsers = selected==="all" ? users : users.filter(user=>user.username.toLowerCase()===selected.toLowerCase());
    const searchUsersByName = searchValue === "" ? users : users.filter(user => user.username.toLowerCase().includes(searchValue.toLowerCase()))
    const finalFilteredUsers = isFilterActive === 'selected' ? filteredUsers : searchUsersByName

    const handleToggleDown = (userId) => {
        setIsToggledDown(prevState => ({
            ...prevState,
            [userId]: !prevState[userId],
        }));
    }



    const handleChangeActiveFilter = () => {
        if(searchValue === "" && selected !== "all") {
            setIsFilterActive("selected")
        }
        else if(searchValue !== ""){
            setIsFilterActive("searchValue")
        }
        else {
            setIsFilterActive("")
        }


    }
    useEffect(() => {
        handleChangeActiveFilter()
        console.log("Aktualny filtr:", isFilterActive);
    }, [searchValue, selected])




    return (
        <>

            <div className={'flex justify-center flex-row items-center flex-wrap '}>
                {finalFilteredUsers.map((user) => (
                    <div className={'w-40 mx-4 px-2 border my-4 rounded-2xl flex flex-col'} key={user.id}>
                        <h2 className={'text-center my-2 font-bold break-words'}>{user.name}</h2>
                        <p className={'text-center break-words'}>{user.username}</p>
                        <p className={'text-center break-words'}>{user.email}</p>
                        <p className={'text-center break-words'}>{user.address.street || 'ulica'}</p>
                        {(isToggledDown[user.id]) && (
                            <p>{user.phone}</p>

                        )}
                        <button
                            className={'rounded-xl my-2 bg-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-105 cursor-pointer'}
                            onClick={()=>handleToggleDown(user.id)}
                        >{isToggledDown[user.id] ? "ukryj" : "pokaż"} szczegóły</button>
                    </div>
                ))}
            </div>
        </>
    )
}