import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

export default function Question({
  key,
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  onSkipAnswer
}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[key].answers[0] === answer
      })

      // calls function from Quiz that indicates an answer has been selected, 
      // adds it to the array of answers, and determines if it is correct or not
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  }

  return <div id="question">
    <QuestionTimer
      timeout={10000}
      onTimeout={onSkipAnswer}
    />
    <h2>{questionText}</h2>
    <Answers
      answers={answers}
      selectedAnswer={selectedAnswer}
      answerState={answerState}
      onSelect={handleSelectAnswer}
    />
  </div>
}