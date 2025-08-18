import React from 'react';


function ConfirmationModal({ show, handleClose, handleConfirm, title, message }) {
  if (!show) {
    return null;
  }

  return (
    <div 
      className="modal d-block" 
      tabIndex="-1" 
      role="dialog" 
      style={{ 
        backgroundColor: 'rgba(0,0,0,0.5)', 
        display: 'block' 
      }}
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              aria-label="Close" 
              onClick={handleClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>{message}</p>
          </div>
          <div className="modal-footer">
            <button 
              type="button" 
              className="btn btn-secondary" 
              onClick={handleClose}
            >
              Cancel
            </button>
            <button 
              type="button" 
              className="btn btn-addtocart" 
              
              onClick={handleConfirm}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;