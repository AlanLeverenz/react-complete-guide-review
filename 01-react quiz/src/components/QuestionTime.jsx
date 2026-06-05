import { useState } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  setTimeout(onTimeout, timeout);

  setInterval(() => {
    setRemainingTime();
  }, 100);

  return <progress id="question-time" />;
}