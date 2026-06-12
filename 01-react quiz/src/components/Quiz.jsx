import { useState, useCallback } from 'react';

import QUESTIONS from '../questions.js';
import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import quizCompleteImg from '../assets/quiz-complete.png';

export default function Quiz() {
  // added state for answers
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex =
    // to stay on a question until it has been answered
    // userAnswers array builds as each question is answered
    answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer
    (selectedAnswer
    ) {
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

  // null is a placeholder for handleSelectAnswer
  // whenever the quesion is answered (changes) React will destroy the 
  // old component and create a new one (unmount and mount).
  // the key helps React know when to do this, differentiating answers

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <Answers
          key={activeQuestionIndex}
          answers={QUESTIONS[activeQuestionIndex].answers}
          selectedAnswer={userAnswers[userAnswers.length - 1]}
          answerState={answerState}
          onSelect={handleSelectAnswer}
        />
      </div>
    </div>
  );
}