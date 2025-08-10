import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

function CartDropdown({ closeDropdown }) {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-3 shadow bg-white rounded" style={{ minWidth: "300px" }}>
      {cartItems.length === 0 ? (
        <p className="text-muted text-center">Your cart is empty.</p>
      ) : (
        <>
          <ul
            className="list-unstyled mb-2"
            style={{ maxHeight: "200px", overflowY: "auto" }}
          >
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <img
                  src={item.mainImage}
                  alt={item.name}
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "cover",
                    borderRadius: "4px",
                  }}
                />
                <div className="ms-2 me-2 flex-grow-1">
                  <div style={{ fontSize: "0.9rem", fontWeight: "600" }}>
                    {item.name}
                  </div>

                  <div
                    className="input-group input-group-sm mt-1"
                    style={{ maxWidth: "110px" }}
                  >
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 0}
                      style={{ padding: "0 8px" }}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      className="form-control text-center"
                      value={item.quantity}
                      min="0"
                      onChange={(e) => {
                        const value = parseInt(e.target.value);
                        if (!isNaN(value) && value >= 1) {
                          updateQuantity(item.id, value);
                        }
                      }}
                      style={{ padding: "0", fontSize: "0.85rem" }}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      style={{ padding: "0 8px" }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div
                  className="text-end"
                  style={{ minWidth: "80px", fontWeight: "500" }}
                >
                  ${item.price * item.quantity}
                </div>

                <button
                  className="btn btn-sm btn-link mt-1"
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "black" }}
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
