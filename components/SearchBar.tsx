import React, { useState } from 'react'


export default function SearchBar() {
     const [searchValue, setSearchValue] = useState("")

     function handleInputChange(event) {
          setSearchValue(event.target.value)
     }

     return (
          <div>
               <input type="text" value={searchValue} placeholder="Search..." 
               className="search-bar"
               onChange={handleInputChange}></input>
          </div>
     );
}