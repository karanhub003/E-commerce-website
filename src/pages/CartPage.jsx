import React from "react";
import "./CartPage.css";
import { useCart } from "../context/CartContext";
export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
  } = useCart();
  console.log(totalPrice);
  return (
    <div className="cartContainer">
      <div className="cartItemBox">
        <h2>Cart Items</h2>
        <div className="cartProductContainer">
          {cart.length === 0 ? (
            <h2>Your Cart is empty</h2>
          ) : (
            cart.map((item) => (
              <div className="cartProductCard">
                <div className="proImg">
                  <img src={item.images[0]} alt="" />
                </div>
                <div className="proInfo">
                  <p className="proTitle">{item.title}</p>
                  <p>
                    Price: <span>${item.price}</span>
                  </p>
                  <div className="cartProductController">
                    <div className="incDec">
                    <button className="incDecBtn" onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button className="incDecBtn" onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    
                    <button className="removeBtn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="cartPriceBox">
        <div className="cartPriceInfo">
          <h2>Cart Total</h2>
          <div className="pricebox">
            <b>items:</b>
            <p>{totalPrice}</p>
          </div>
          <div className="pricebox">
            <b>delivery:</b>
            <p>50</p>
          </div>
          <div className="pricebox">
            <b>GST:</b>
            <p>18%</p>
          </div>
          <div className="pricebox">
            <h3>Total:</h3>
            <p>${totalPrice}</p>
          </div>
        </div>
        <button className="placeBtn">Place Order</button>
      </div>
    </div>
  );
}
