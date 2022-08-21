import React, { useContext } from "react";
import { QuizContext } from "./context/Context";

const MainMenus = () => {
  const { gameState, setGamestate } = useContext(QuizContext);

  return (
    <div className="main_menu">
      <button onClick={() => setGamestate("quizs")} className="btn">
        start quiz
      </button>
    </div>
  );
};

export default MainMenus;
