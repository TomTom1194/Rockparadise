import React from "react";
import { Link } from "react-router-dom";

function PaymentCongrat() {
  return (
    <div className="container text-center my-5">
      <h2 className="text-success mb-4">🎉 Payment Successful!</h2>
      <p>Thank you for your purchase. We’ve received your payment.</p>
        <Link to="/productlist/Diamond" className="btn btn-dark mt-3">
          Continue Shopping
        </Link>
    </div>
  );
}

export default PaymentCongrat;
