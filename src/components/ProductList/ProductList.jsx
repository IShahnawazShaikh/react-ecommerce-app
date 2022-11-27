import React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  var products = [
    {
      name: "iphone 14",
      price: 150000,
    },
    {
      name: "iphone 13",
      price: 70000,
    },
    {
      name: "iphone 12",
      price: 50000,
    },
  ];

  return (
    <div>
      {products.map(function (product) {
        return <ProductCard data={product}></ProductCard>;
      })}
    </div>
  );
}
