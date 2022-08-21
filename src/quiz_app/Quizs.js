import React, { useContext, useState } from "react";
import Questions from "../quiz_app/context/questionBank";
import { QuizContext } from "./context/Context";

const Quizs = () => {
  const { score, setScore, setGamestate } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChoose, setOptonChoose] = useState("");

  const nextQues = () => {
    if (Questions[currQuestion].answer === optionChoose) {
      setScore(score + 1);
    }
    //move to the next ques
    setCurrQuestion(currQuestion + 1);
  };
  const finishQuiz = () => {
    if (Questions[currQuestion].answer === optionChoose) {
      setScore(score + 1);
    }
    setGamestate("emdscreen");
  };
  return (
    <div className="quiz">
      <p>Quiz-App</p>
      <h1 className="ques">{Questions[currQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptonChoose("A")}>
          {Questions[currQuestion].optionA}
        </button>
        <button onClick={() => setOptonChoose("B")}>
          {Questions[currQuestion].optionB}
        </button>
        <button onClick={() => setOptonChoose("C")}>
          {Questions[currQuestion].optionC}
        </button>
        <button onClick={() => setOptonChoose("D")}>
          {Questions[currQuestion].optionD}
        </button>
      </div>

      {/* next Question */}
      {currQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQues} className="nextques">
          {" "}
          Next Question{" "}
        </button>
      )}
    </div>
  );
};

export default Quizs;
