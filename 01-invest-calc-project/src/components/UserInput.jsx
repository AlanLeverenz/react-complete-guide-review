import { useState } from 'react';

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      }
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required />
        </p>
        <label>Annual Investment</label>
        <input type="number" required onChange={(event) => handleChange('initialInvestment', event.target.value)} />
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required />
        </p>
        <label>Duration</label>
        <input type="number" required />
      </div>
    </section>
  )
}