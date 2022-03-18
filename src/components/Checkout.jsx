import React, { useContext } from "react";
import Card from './Card.jsx';
import CartContext from "../context/CartContext.js";


export default function Checkout() {
  const {items} = useContext(CartContext);
  return (
    <div className="container mx-auto">
      <div className="card-checkout">
        {items.map((product, i) => (
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
