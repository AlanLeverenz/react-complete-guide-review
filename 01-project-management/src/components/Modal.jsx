import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// forwardRef not needed for React 19 and newer

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  // to call this function from elsewhere
  // connect ref to dialog element
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
    </dialog>, document.getElementById('modal-root')
  );
});

export default Modal;