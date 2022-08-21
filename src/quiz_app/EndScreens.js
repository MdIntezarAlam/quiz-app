import React, { useContext } from "react";
import { QuizContext } from "./context/Context";
import Questions from "./context/questionBank";

const EndScreens = () => {
  const { score, setScore, setGamestate } = useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGamestate("menu");
  };

  return (
    <div className="endscreen">
      <span>Quiz finished</span>
      <h3>
        You have scored {score}/{Questions.length}
      </h3>
      <button onClick={restartQuiz} >Restart Quiz</button>
    </div>
  );
};

export default EndScreens;
