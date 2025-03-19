

export default function UsersSearch({searchValue, handleSearchName}) {
    return (
        <>
            <div>
                <div>
                    <label htmlFor="name">Wyszukaj po imieniu:</label>
                </div>
                <input className="border-1 rounded" type="text" placeholder="Search by name" id="name" value={searchValue} onChange={(e) => handleSearchName(e.target.value)} />
            </div>
        </>
    )
}