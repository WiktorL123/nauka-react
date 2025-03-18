 export default function UsersFilter({users}) {

    const uniqueNames = [...new Set(users.map((user) => user.username))];

    return (
        <>
            <div>
                <select>
                    <option value={'all'}>Wszyscy</option>
                    {uniqueNames.map((name, index) =>(
                        <option key={index} value={name}>{name}</option>
                    ))}
                </select>
            </div>
        </>
    )
 }