import { useState } from 'react';

export default function TimeChallenge({ title, targetTime }) {
  const [timerExpired, setTimeExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
  }

  return <section className="challenge">
    <h2>{title}</h2>
    <p className="challenge-time">
      {targetTime} second{targetTime > 1 ? 's' : ''}
    </p>
    <p>
      <button>
        Start Challenge
      </button>
    </p>
    <p className="">
      Time is running... / Time inactive
    </p>
  </section>
}