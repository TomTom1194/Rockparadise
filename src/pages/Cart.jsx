import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from "../Components/ConfirmationModal";

function Cart() {
  const { cartItems, updateQuantity, totalPrice, removeFromCart } = useCart();
  const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
     const [selectedItemId, setSelectedItemId] = useState(null);

  if (cartItems.length === 0) {
    return (
      <div className="container my-5 text-center">
        <h3>Your cart is empty 🛒</h3>
        <Link to="/productlist/Diamond" className="btn btn-dark mt-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

    const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setShowModal(true);
  };

    const handleConfirmDelete = () => {
    if (selectedItemId) {
      removeFromCart(selectedItemId);
    }
    setShowModal(false);
    setSelectedItemId(null);
  };

  return (
    <div className="container my-5">
       <button
          className="btn btn-outline-secondary  "
          onClick={() => navigate(-1)}
          
        >
          ← Back
        </button>
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
                     <div
                    className="input-group input-group-sm mt-1"
                    style={{ maxWidth: "120px", height:"30px" }}
                  >
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 0}
                      style={{ padding: "0 8px", fontSize: "1.2rem" }}
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
                        if (!isNaN(value) ) {
                          updateQuantity(item.id, value);
                        }
                      }}
                      style={{ padding: "0", fontSize: "1.2rem" }}
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      style={{ padding: "0 8px", fontSize: "1.2rem" }}
                    >
                      +
                    </button>
                  </div>
              </div>

              {/* Total + Delete */}
              <div className="col-6 col-md-3 text-end">
                <p className="mb-2">
                  <strong>Total:</strong> ${item.price * item.quantity}
                </p>
                <button
                  className="btn btn-sm btn-link p-0"
                  onClick={() => handleDeleteClick(item.id)}
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

      <ConfirmationModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        handleConfirm={handleConfirmDelete}
        title="Confirm Delete"
        message="Are you sure you want to remove this item from your cart?"
      />
    </div>
  );
}

export default Cart;
