
export default function UsersList({users}){
    return (
        <div className={'flex justify-center flex-row items-center flex-wrap '}>
            {users.map((user, index) => (
                <div className={' w-40 h-40 mx-4 px-2 border my-4 rounded-2xl'} key={index}>
                    <h2 className={'text-center my-2 font-bold break-words'}>{user.name}</h2>
                    <p className={'text-center break-words'}>{user.username}</p>
                    <p className={'text-center break-words'}>{user.email}</p>
                    <p className={'text-center break-words'}>{user.address.street}</p>
                </div>
            ))}
        </div>
    )
}