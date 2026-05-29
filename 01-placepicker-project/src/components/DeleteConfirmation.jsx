import { useEffect } from 'react';

import ProgressBar from './ProgressBar.jsx';

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {

  // useEffect can stop the timer. 
  // onConfirm removes the modal from DOM
  useEffect(() => {
    console.log('TIMER SET');
    setTimeout(() => {
      onConfirm();
    }, 3000);

    // cleanup function
    return () => {
      console.log('Cleaning up timer');
      clearTimeout();
    }
    // potential for infinite loop if a function is executed again 
    // JS treats it as a different function because it is recreated
    // solved with callBack function in the App to avoid infinite loop
  }, [onConfirm]);


  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
