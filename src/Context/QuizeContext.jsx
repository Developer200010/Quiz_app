import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"
const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizData, setQuizData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await axios.get("/api/quiz");
        console.log(response.data)
        setQuizData(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuizData();
  }, []);

  return (
    <QuizContext.Provider value={{ quizData, loading, error }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use QuizContext
export const useQuiz = () => {
  return useContext(QuizContext);
};
