import React, { useState } from "react";
import "./quiz.css";
const Quiz = () => {
  var questionBank = [
    {
      Question: "What is the capital of India?",
      Answers: [
        { Answer: "Delhi", isCorrect: true },
        { Answer: "patna", isCorrect: false },
        { Answer: "Goa", isCorrect: false },
        { Answer: "Mumbai", isCorrect: false },
      ],
    },
    {
      Question: "Where is The Taj mahal?",
      Answers: [
        { Answer: "pakistan", isCorrect: false },
        { Answer: "china", isCorrect: false },
        { Answer: "ukrain", isCorrect: false },
        { Answer: "Agra", isCorrect: true },
      ],
    },
    {
      Question: "Where is The Burj Khalifa?",
      Answers: [
        { Answer: "India", isCorrect: false },
        { Answer: "America", isCorrect: false },
        { Answer: "Dubai", isCorrect: true },
        { Answer: "China", isCorrect: false },
      ],
    },
    {
      Question: "What is the Correct ouptput 2+3-1",
      Answers: [
        { Answer: "-2", isCorrect: false },
        { Answer: "4", isCorrect: true },
        { Answer: "4.1", isCorrect: false },
        { Answer: "55", isCorrect: false },
      ],
    },
    {
      Question: "What is the Correct ouptput 100/100",
      Answers: [
        { Answer: "-1", isCorrect: false },
        { Answer: "-1.10", isCorrect: false },
        { Answer: "1", isCorrect: true },
        { Answer: "5", isCorrect: false },
      ],
    },
    {
      Question: "Correct full form of KU  ?",
      Answers: [
        { Answer: "Kakatiya University", isCorrect: true },
        { Answer: "Kakatiya Univeity", isCorrect: false },
        { Answer: "Kakatiya Univers", isCorrect: false },
        { Answer: "Kakatiya Unique", isCorrect: false },
      ],
    },
  ];
  // onevar=> hold the current qn
  // twovar=> hold the score
  // threevar=>  last Qn the score
  const [currentQn, setcurrentQn] = useState(0);
  const [score, setScore] = useState(0);
  const [showscore, setShowScore] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQn + 1;
    if (nextQuestion < questionBank.length) {
      setcurrentQn(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  //everyyhing wiil be reset
  const resetQuiz = () => {
    setcurrentQn(0);
    setScore(0);
    setShowScore(false);
  };

  console.log(questionBank);
  return (
    <div className="App">
      {showscore ? (
        <div className="score_section">
          <p>
            You have scored {score} out of {questionBank.length}
          </p>
          <>
            <button type="submit" onClick={resetQuiz} className="play-again">
              Play Again
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="qn_sec">
            <div className="qn_count">
              <div className="qn_num">
                <span className="">{currentQn + 1}</span>/{questionBank.length}
              </div>
              <h1 className="qn_text">{questionBank[currentQn].Question}</h1>
            </div>
          </div>
          <div className="answer_section">
            {questionBank[currentQn].Answers.map((answer) => (
              <button onClick={() => handleAnswer(answer.isCorrect)}>
                {answer.Answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Quiz;
