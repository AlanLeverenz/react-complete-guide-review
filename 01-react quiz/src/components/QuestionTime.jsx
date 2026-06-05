import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  // to set a time limit for answering a question in the quiz
  // apply useEffect to avoid creating multiple timers
  // will run only if/when the dependencies change
  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout])


  useEffect(() => {
    // for setting the increments of the progress bar
    // useEffect avoids an infinite loop updating remainingTime
    // it runs only once if there are no dependencies
    setInterval(() => {
      setRemainingTime(prevRemainingTime => prevRemainingtime - 100);
    }, 100);
  }, []);



  return <progress id="question-time" />;
}