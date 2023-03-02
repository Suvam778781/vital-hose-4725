import React, { useState } from 'react';
import ReactPlayer from 'react-player';

interface Question {
  id: number;
  text: string;
  answer: string;
  choices: string[];
}

const quizData: Question[] = [
  {
    id: 1,
    text: 'What is the capital of France?',
    answer: 'Paris',
    choices: ['Paris', 'Berlin', 'Madrid', 'London']
  },
  {
    id: 2,
    text: 'Who painted the Mona Lisa?',
    answer: 'Leonardo da Vinci',
    choices: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Rembrandt']
  },
  {
    id: 3,
    text: 'What is the largest organ in the human body?',
    answer: 'Skin',
    choices: ['Liver', 'Heart', 'Skin', 'Kidney']
  }
];

const VideoQuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(quizData[0])

  const [currentIndex, setCurrentIndex] = useState(0)
  
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)


  const handleAnswerOptionClick = (answer: string) => {
    const nextIndex = currentIndex + 1
    if (answer === currentQuestion.answer) {
      setScore(score + 1)}

    if (nextIndex < quizData.length) {

      setCurrentIndex(nextIndex);
      
      setCurrentQuestion(quizData[nextIndex])
    } else {
      setShowScore(true)
    }
  }
  return (
    <div >
      <div  style={{width:"100%"}}>
        <ReactPlayer width={"100%"} url='https://www.youtube.com/watch?v=JaVczFfoPkg' />
      </div>
      <div >
        {showScore ? 
          <div >
            You scored {score} out of {quizData.length}
          </div>
        :
          <>
            <div>
              <div >
                <span>Question {currentIndex + 1}</span>/{quizData.length}


              </div>
              <div className='question-text'>{currentQuestion.text}</div>
            </div>
            <div >

              {currentQuestion.choices.map((choice, index) => 
                <button key={index} onClick={() => handleAnswerOptionClick(choice)}>
                  {choice}
                </button>
              )}
            </div>
          </>

        }
      </div>

    </div>
  );
};

export default VideoQuizGame;
