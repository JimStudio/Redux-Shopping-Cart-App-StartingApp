import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";


const CartItems = () => {

  const carItems = useSelector(state => state.cart.itemsList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
     
        {carItems.map(item => (
           <li key={item.id}>
            <CartItem
            quantity={item.quantity}
            id={item.id} 
            price = {item.price}
            total = {item.totalPrice} 
            name = {item.name} />
            </li>
        ))}
    
   
      </ul>
    </div>
  );
};

export default CartItems;
