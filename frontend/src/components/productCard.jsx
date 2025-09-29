import React from "react";

function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold text-lg">{product.name}</h2>
      <p>Price: ₦{product.price}</p>
    </div>
  );
}

export default ProductCard;
