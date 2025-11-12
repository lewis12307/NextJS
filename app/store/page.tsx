"use client";
import { useEffect, useState } from "react";

import ProductCard from "../../components/Product";
import SearchBar from "../../components/SearchBar";


import "../../styles/store-styles.css"





interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}




export default function Store() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products?limit=20");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } 
    }
    fetchProducts();
  }, []);


  const [search, setSearch] = useState("");






  return (
    <div>
        <h2>Fake Store Products</h2>

        <SearchBar/>
    
        <div className="grid-display">
            {products
              .filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
              .map((p) => (<ProductCard key={p.id} product={p} />))
            }
        </div>
    </div>
  );
}
