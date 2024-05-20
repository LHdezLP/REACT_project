import React from 'react';
import './Modal.css';

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
