import { useState } from "react";
import QuizScreen from "./QuizScreen";
import "./StartScreen.css"
const StartScreen = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  return quizStarted ? (
    <QuizScreen />
  ) : (
    <div className="start-container">
      <div className="start-card">
        <h1 className="start-title">Welcome to the Quiz!</h1>
        <p className="start-description">
          Test your knowledge and challenge yourself. Are you ready?
        </p>
        <button className="start-button" onClick={() => setQuizStarted(true)}>Start Quiz</button>
      </div>
    </div>
  );
};

export default StartScreen;
