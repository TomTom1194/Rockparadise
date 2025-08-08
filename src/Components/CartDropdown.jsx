import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function CartDropdown({ closeDropdown }) {
  const { cartItems, updateQuantity,removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className=" p-3 shadow" style={{ minWidth: "300px" }}>
      {/* <h6 className="dropdown-header">Cart</h6> */}
      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <ul className="list-unstyled mb-2" style={{ maxHeight: "200px", overflowY: "auto" }}>
            {cartItems.map((item, index) => (
              <li key={index} className="d-flex justify-content-between align-items-center mb-2">
                <img src={item.mainImage} alt={item.name} style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "4px" }} />
                <div className="ms-1 me-1" style={{width: "50%"}}>
                  <div style={{ fontSize: "0.9rem",fontWeight:"600" }}>{item.name}</div>
                  {/* <small className="text-muted">x{item.quantity}</small> */}
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    style={{ width: "60px" }}
                    className="form-control"
                  />
                </div>
                <div className="text-end">${(item.price * item.quantity).toLocaleString()}</div>
                  <button
                    className="btn btn-sm btn-link mt-1"
                    onClick={() => removeFromCart(item.id)}
                    style={{color:"black"}}
                  >
                    <FaTrashAlt />
                  </button>
              </li>
            ))}
          </ul>
          <div className="border-top pt-2 d-flex justify-content-between align-items-center">
            <strong>Total:</strong>
            <span>${totalPrice.toLocaleString()}</span>
          </div>
           <button
            className="btn btn-dark btn-sm mt-2 w-100"
            onClick={() => {
              closeDropdown(); 
              navigate("/cart"); 
            }}
          >
            Go to Cart
          </button>
        </>
      )}
    </div>
  );
}

export default CartDropdown;
