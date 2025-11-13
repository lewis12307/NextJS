"use client";
import { useEffect, useState } from "react";

import Search from "../../components/SearchBar";



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
    fetch("https://fakestoreapi.com/products?limit=20")
        .then((response) => response.json())
        .then((productsArray) => {
          const newProductsState = productsArray.map((product) => ({
              id: product.id,
              title: product.title,
              image: product.image,
              price: product.price
          }));
        setProducts(newProductsState)
    })
  }, []);


  return (
    <div>
        <h2>Fake Store Products</h2>
        <Search products={products}/>
    </div>
  );
}
