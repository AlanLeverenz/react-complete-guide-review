import { useRef } from 'react';

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {

  // shuffledAnswers is now a ref and won't change once answers are shuffled
  // if it is undefined (not yet shuffled) then shuffle it
  // useRef does not change value if the component is rendered again
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  // the Fisher-Yates Shuffle algorithm
  // function shuffle(shuffledAnswers) {
  //   for (let i = array.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  //   }
  //   return shuffledAnswers;
  // }

  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        // logic for highlighting answers
        const isSelected = selectedAnswer === answer;
        let cssClass = '';

        if (answer === 'answered' && isSelected) {
          cssClass = 'selected';
        }

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }

        return (
          // key helps React organize the list
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
} 