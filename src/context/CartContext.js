import {createContext, useState} from 'react';

const CartContext = createContext(); 

export function CartProvider({children}){
    const [items, setItems] = useState([]);

    const addToCart = (name, price, tag1, tag2,label,description, id) => {
        setItems((prevState) => [
          ...prevState,
          { name, price, tag1, tag2, label, description },
        ]);
    } 
    return(
        <CartContext.Provider value={{items, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext