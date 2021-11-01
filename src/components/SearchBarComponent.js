import React from 'react'

function SearchBar() {
    return (
        <div className="topnav absolute flex justify-center 2xs:h-10 h-10 2xs:w-3/5 xs:w-4/6 mt-10 2xs:mx-16 xs:mx-16 overflow-hidden border-none p-1.5">
            <input className="input bg-primary 2xs:rounded-full rounded-full text-center" type="text" placeholder="Type a move name..." />
        </div>
    )
}

export default SearchBar
