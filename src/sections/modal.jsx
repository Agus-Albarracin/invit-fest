import React from 'react';
import Modal from 'react-modal';
import './modal.css';
import toast, { Toaster } from 'react-hot-toast';
import toastfoto from "../assets/fototoast.png"

Modal.setAppElement('#root'); // This is important for screen readers

const RegaloModal = ({ isOpen, onRequestClose }) => {
  const cvu = "0000003100004365130318";
  const alias = "juli.ro.mp";

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
        toast.custom((t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 border border-gray-300`}
          >
            <div className="flex-1 w-0 bg-white p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 pt-0.5">
                  <img
                    className="h-10 w-10 rounded-full"
                    src={toastfoto}
                    alt="fototast"
                  />
                </div>
              </div>
            </div>
          </div>
        ));
    }).catch(() => {
      toast.error("Hubo un error al copiar")
    });
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="modalContent"
      overlayClassName="modalOverlay"
    >
         <Toaster />
      <div className="copyContainer">
        <p>CVU: {cvu}</p>
        <button onClick={() => copyToClipboard(cvu, "CVU")} className="copyButton">Copiar CVU</button>
      </div>
      <div className="copyContainer">
        <p>Alias: {alias}</p>
        <button onClick={() => copyToClipboard(alias, "Alias")} className="copyButton">Copiar Alias</button>
      </div>
      <div className="linkBoxMP">
        <a href="https://www.mercadopago.com.ar" target="_blank" rel="noopener noreferrer">Ir a Mercado Pago</a>
      </div>
      <button onClick={onRequestClose} className="closeButton">Cerrar</button>
    </Modal>
  );
};

export default RegaloModal;