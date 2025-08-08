import React from 'react';

/**
 * Một modal xác nhận đơn giản sử dụng Bootstrap.
 * @param {object} props - Thuộc tính của component.
 * @param {boolean} props.show - Quyết định xem modal có hiển thị hay không.
 * @param {function} props.handleClose - Hàm được gọi khi người dùng đóng modal (Cancel).
 * @param {function} props.handleConfirm - Hàm được gọi khi người dùng xác nhận (Confirm).
 * @param {string} props.title - Tiêu đề của modal.
 * @param {string} props.message - Nội dung thông báo của modal.
 */
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
              className="btn btn-primary" 
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