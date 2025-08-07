import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, updateQuantity, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/" className="btn btn-dark mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Your Cart</h2>

      <div className="row g-4">
        {cartItems.map((item) => (
          <div key={item.id} className="col-12 border rounded p-3 shadow-sm">
            <div className="row g-3 align-items-center">
              {/* Image */}
              <div className="col-3 col-md-2">
                <img
                  src={item.mainImage}
                  alt={item.name}
                  className="img-fluid rounded border"
                  style={{ objectFit: "contain", maxHeight: "100px" }}
                />
              </div>

              {/* Name + Price */}
              <div className="col-9 col-md-4">
                <h5 className="mb-2 text-break">{item.name}</h5>
                <p className="mb-0">
                  <strong>Price:</strong> ${item.price}
                </p>
              </div>

              {/* Quantity */}
              <div className="col-6 col-md-3">
                <label className="form-label mb-1">Quantity:</label>
                <input
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="form-control"
                  style={{ maxWidth: "80px" }}
                />
              </div>

              {/* Total + Delete */}
              <div className="col-6 col-md-3 text-end">
                <p className="mb-2">
                  <strong>Total:</strong> ${item.price * item.quantity}
                </p>
                <button
                  className="btn btn-sm btn-link p-0"
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "black", fontSize: "1.5rem" }}
                >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          </div>        
        ))}
      </div>

      <hr className="my-4" />

      <h4 className="text-end">
        <strong>Total Price:</strong>{" "}
        <span className="text-success">${totalPrice}</span>
      </h4>

      <div className="text-end text-center text-md-end">
        <button
          className="btn btn-addtocart mt-4 px-4 py-2 w-100 w-md-auto"
          style={{ maxWidth: "300px", height: "50px" }}
          onClick={() => navigate("/payment")}
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Cart;
