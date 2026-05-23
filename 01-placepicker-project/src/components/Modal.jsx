import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children }) {
  const dialog = useRef();

  // useEffect handles the DOM API
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, []);
  // any value that causes the code to execute again is a dependency (state, prop)

  return createPortal(
    <dialog className="modal" ref={dialog} open={open}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
