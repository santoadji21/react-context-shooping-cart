
import { RiShoppingBag3Fill } from "react-icons/ri";

import {useContext} from "react";
import CartContext from "../context/CartContext";

export default function Card({name, price, tag1, tag2, label, description, id}) {
  const {addToCart} = useContext(CartContext);
  return (
    <>
      <div className="card w-90 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://api.lorem.space/image/shoes?w=400&h=225"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <div className="flex flex-row justify-between">
            <h2 className="card-title">
              {name}
              <div className="badge badge-secondary">{label}</div>
            </h2>
            <h2 className="text-left font-bold">${price}</h2>
          </div>
          <p className="text-left">
            {description}
          </p>
          <div className="card-actions flex flex-row justify-between items-center ">
            <div>
              <div className="badge badge-outline mr-3">{tag1}</div>
              <div className="badge badge-outline">{tag2}</div>
            </div>
            <div className="cart-icon" onClick={() => addToCart(name,price,tag1,tag2,label,description)}>
              <RiShoppingBag3Fill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

