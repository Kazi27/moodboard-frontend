// Modal.js
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <div className="modal-button-container">
          <button className="modal-button modal-button-primary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;