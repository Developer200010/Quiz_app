import "./ResultScreen.css"
const ResultScreen = ({ score, total }) => {
    return (
        <div className="result-container">
        <div className="result-card">
          <h1 className="result-title">Quiz Completed!</h1>
          <p className="result-score">
            You scored <span>{score}</span> out of <span>{total}</span>
          </p>
          <button className="restart-button" onClick={() => window.location.reload()}>
            Try Again
          </button>
        </div>
      </div>
    );
};
  
<button >Restart Quiz</button>
  export default ResultScreen;
  