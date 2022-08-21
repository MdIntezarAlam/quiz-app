import React, { useState } from "react";
import EndScreens from "./quiz_app/EndScreens";
import MainMenus from "./quiz_app/MainMenus";
import Quizs from "./quiz_app/Quizs";
import { QuizContext } from "./quiz_app/context/Context";
import "./quiz_app/quiz.css";

const Appp = () => {
  const [gameState, setGamestate] = useState("menu");
  const [score, setScore] = useState(0);


  
  return (
    <div className="Appp">
      <QuizContext.Provider
        value={{ gameState, setGamestate, score, setScore }}
      >
        {gameState === "menu" && <MainMenus />}
        {gameState === "quizs" && <Quizs />}
        {gameState === "emdscreen" && <EndScreens />}
      </QuizContext.Provider>
    </div>
  );
};

export default Appp;
