import React from 'react';
import './Modal.css'; // Importa los estilos del modal

const Modal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                {children}
                <button className="btn btn-primary modal-close-button" onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
};

export default Modal;
