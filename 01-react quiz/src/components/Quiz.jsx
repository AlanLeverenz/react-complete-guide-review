import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  // added state for answers
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    // to stay on a question until it has been answered
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer
    (selectedAnswer
    ) {
    // console.log('INDEX = ' & { activeQuestionIndex });
    setAnswerState('answered');
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });

    // check if answer matches the first array of the question
    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
        setAnswerState('correct');
      } else {
        setAnswerState('wrong');
      }

      // another timeout clearing answerState to empty string after 2 seconds
      setTimeout(() => {
        setAnswerState('');
      }, 2000);
      // console.log('answer is ' & { answerState });
    }, 1000);
  },
    [activeQuestionIndex]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <h2>Quiz Completed!</h2>
        <img src={quizCompleteImg} alt="Trophy icon" />
      </div>
    )
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  // shuffledAnswers.sort(() => Math.random() - 0.5);
  // the Fisher-Yates Shuffle algorithm
  function shuffle(shuffledAnswers) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return shuffledAnswers;
  }

  // null is a placeholder for handleSelectAnswer
  // the QuestionTimer as not being reset when the question changes
  // use a key. whenever it changes React will destroy the 
  // old component and create a new one (unmount and mount)
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => {
            // logic for highlighting answers
            const isSelected = userAnswer[userAnswers.length - 1] === answer;
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
                  onClick={() => handleSelectAnswer(answer)}
                  className={cssClass}
                >
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}