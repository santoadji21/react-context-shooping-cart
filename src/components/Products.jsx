import React from "react";
import Card from "./Card.jsx";

import { products } from "../data/Data.js";

export default function Products() {
  return (
    <div className="container mx-auto">
      <div className="card-content">
        {products.map((product, i) => (
          <Card
            key={i}
            name={product.name}
            price={product.price}
            description={product.description}
            tag1={product.tag1}
            tag2={product.tag2}
            label={product.label}
          />
        ))}
      </div>
    </div>
  );
}
