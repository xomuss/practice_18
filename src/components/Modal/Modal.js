import React, { createPortal } from 'react';
import s from './Modal.module.css';

const Modal = () => {
  return createPortal(
    <div>
      <div className={s.overlay}>
        <div className={s.content}>
          <h1>modal</h1>
        </div>
      </div>
    </div>,
    document.getElementById('modal'),
  );
};

export default Modal;
