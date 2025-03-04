import { useState, useEffect } from "react";
import { useQuiz } from "../../src/Context/QuizeContext";
import ResultScreen from "./ResultScreen";
import "./QuizScreen.css";

const QuizScreen = () => {
  const { quizData, loading } = useQuiz();

  if (loading) return <h1 className="loading">Loading...</h1>;
  if (!quizData || quizData.length === 0 || !quizData[0]) return <h1 className="not-found">Not found</h1>;

  const { questions = [], duration = 0 } = quizData[0]; // Safe access
  const totalQuestions = questions.length;
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(duration * 60);
  const [selectedAnswer, setSelectedAnswer] = useState(new Array(totalQuestions).fill(null)); 

  useEffect(() => {
    if (timeLeft <= 0) {
      setShowResults(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (totalQuestions === 0) return <h1 className="not-found">No questions available</h1>;

  const question = questions[currentQuestion];

  const handleOptionClick = (index, isCorrect) => {
    const updatedAnswers = [...selectedAnswer];
    updatedAnswers[currentQuestion] = index;
    setSelectedAnswer(updatedAnswers);

    // Score should only increase when selecting for the first time
    if (selectedAnswer[currentQuestion] === null && isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < totalQuestions) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  if (showResults) return <ResultScreen score={score} total={totalQuestions} />;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="quiz-screen">
      <div className="quiz-header">
        <h2 className="quiz-title">{quizData[0]?.title || "Quiz"}</h2>
        <div className="quiz-timer">⏳ Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</div>
      </div>

      <h3 className="question-count">Question {currentQuestion + 1} out of {totalQuestions}</h3>
      <h3 className="question-text">{question?.description || "Question not found"}</h3>

      <div className="options">
        {question?.options?.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedAnswer[currentQuestion] === index ? "selected" : ""}`}
            onClick={() => handleOptionClick(index, option.is_correct)}
          >
            {option.description}
          </button>
        ))}
      </div>

      <div className="options NextPreBtn">
        <button className="option-button" onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
          Previous
        </button>
        <button className="option-button" onClick={handleNextQuestion} disabled={selectedAnswer[currentQuestion] === null}>
          Next
        </button>
      </div>
    </div>
  );
};

export default QuizScreen;
