
export default function UsersFilter({uniqueNames, handleChangeOption}) {



    return (
        <>
            <div>
                <select onChange={(e)=>handleChangeOption(e.target.value)}>
                    <option value={'all'}>Wszyscy</option>
                    {uniqueNames.map((name, index) =>(
                        <option
                            key={index}
                            value={name}

                        >

                            {name}

                        </option>
                    ))}
                </select>
            </div>
        </>
    )
 }