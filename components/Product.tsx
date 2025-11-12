"use client";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <h4>${product.price.toFixed(2)}</h4>
    </div>
  );
}
