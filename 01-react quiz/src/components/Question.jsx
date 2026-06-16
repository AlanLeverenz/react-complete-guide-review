import { useState } from 'react';

import QuestionTimer from './QuestionTimer.jsx';
import Answers from './Answers.jsx';
import QUESTIONS from '../questions.js';

export default function Question({
  index,
  onSelectAnswer,
  onSkipAnswer
}) {

  const [answer, setAnswer] = useState({
    selectedAnswer: '',
    isCorrect: null
  })

  let timer = 10000;

  // reset timer to one second after an answer is selected
  if (answer.selectedAnswer) {
    timer = 1000;
  }

  // reset the timer to two seconds to tell the user if it is correct or not
  if (answer.isCorrect !== null) {
    timer = 2000;
  }


  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null
    })

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS[index].answers[0] === answer
      })

      // calls function from Quiz that indicates an answer has been selected, 
      // adds it to the array of answers, and determines if it is correct or not
      setTimeout(() => {
        onSelectAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = '';

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? 'correct' : 'wrong';
  } else if (answer.seletedAnswer) {
    answerState = 'answered'
  }

  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={onSkipAnswer}
        mode={answerState}
      />
      <h2>{QUESTIONS[index].text}</h2>
      <Answers
        answers={QUESTIONS[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  )
}