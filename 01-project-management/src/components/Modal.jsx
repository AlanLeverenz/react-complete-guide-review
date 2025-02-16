import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

// forwardRef not needed for React 19 and newer

const Modal = forwardRef(function Modal({ children }) {
  return createPortal(
    <dialog>
      {children}
    </dialog>, document.getElementById('modal-root')
  );
});

export default Modal;