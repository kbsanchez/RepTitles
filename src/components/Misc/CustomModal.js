import React from 'react';
import './Misc.css';

const CustomModal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`custom-modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
