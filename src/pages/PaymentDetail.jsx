import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import ConfirmationModal from '../Components/ConfirmationModal'; 

function PaymentDetail() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    phone: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Info:", formData);
    setShowModal(true);
  };

  
  const handleConfirmPayment = () => {
    clearCart();
    navigate("/payment-success");
    setShowModal(false); 
  };

  
  const handleCancelPayment = () => {
    setShowModal(false); 
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Payment Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {/* Form  */}
          <div className="col-12 col-md-6 field-input">
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Order Summary  */}
          <div className="col-12 col-md-6 order-summary">
            <h5 className="mb-3">Order Summary</h5>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex mb-3 border-bottom pb-2 align-items-center justify-content-between"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.mainImage}
                    alt={item.name}
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    className="rounded border me-3"
                  />
                  <div>
                    <div className="fw-bold">{item.name}</div>
                    <div><strong>Price:</strong> ${item.price}</div>
                  </div>
                </div>

                <div className="text-end">
                  <div><strong>Quantity:</strong> {item.quantity}</div>
                  <div><strong>Subtotal:</strong> ${item.price * item.quantity}</div>
                </div>
              </div>
            ))}

            <h5 className="text-end mt-3">
              <strong>Total:</strong>{" "}
              <span className="text-success">${totalPrice}</span>
            </h5>

            <button type="submit" className="btn btn-addtocart w-100 mt-4" style={{height: "50px"}}>
              Confirm Payment
            </button>
          </div>
        </div>
      </form>
      
      {/* Component Modal confirm */}
      <ConfirmationModal
        show={showModal}
        handleClose={handleCancelPayment}
        handleConfirm={handleConfirmPayment}
        title="Payment Confirmation"
        message="Are you sure you want to proceed with the payment?"
      />
    </div>
  );
}

export default PaymentDetail;