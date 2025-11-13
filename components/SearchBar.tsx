"use client";
import React, { useState } from 'react'

import ProductCard from './Product';




export default function Search(props) {
     const [searchValue, setSearchValue] = useState("");

     function handleInputChange(event) {
          setSearchValue(event.target.value)
     }



     
     const filteredProducts = props.products
          .filter((product) => (product.title.toLowerCase().includes(searchValue.toLowerCase()))
     );


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