"use client";
import React, { useState } from 'react'

import ProductCard from './Product';




export default function Search(props) {
     const [searchValue, setSearchValue] = useState("");

     const filteredProducts = props.products
          .filter((product) => (product.title.toLowerCase().includes(searchValue.toLowerCase()))
     );



     function handleInputChange(event) {
          setSearchValue(event.target.value)
     }

     return (
          <div>
               <input className="search-bar" type="text" value={searchValue} placeholder="Search..." onChange={handleInputChange}>
               </input>

               <div className="grid-display">
                    {filteredProducts.map((product) => (<ProductCard key={product.id} product={product}/>))}
               </div>
          </div>
     );
}