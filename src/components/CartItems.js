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
        <li>
        {carItems.map(item => (
            <CartItem
            id={item.id} 
            price = {item.price}
            total = {item.totalPrice} 
            name = {item.name} />
        ))}
        </li>
   
      </ul>
    </div>
  );
};

export default CartItems;
