import { useState } from "react";
import { Link } from "react-router-dom";

function Result({ score, total, feedback, questions, answers }) {
  const [showReport, setShowReport] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const percentage = Math.round((score / total) * 100);

  const getAnswerFeedback = (questionId) => {
    const userAnswer = answers.find((a) => a.questionId === questionId)?.answer;
    const question = questions.find((q) => q._id === questionId);
    if (!question || userAnswer === undefined)
      return { text: "No answer recorded.", color: "text-warning" };
    return userAnswer === question.correctAnswer
      ? { text: "Correct!", color: "text-success" }
      : { text: `Incorrect. ${question.info}`, color: "text-error" };
  };

  const handleViewReport = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowReport(true);
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <div className="card bg-base-100 shadow-xl p-6 animate__animated animate__zoomIn relative z-0">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Your Cyber Hygiene Score
        </h2>
        <p className="text-lg mb-4 text-gray-200">
          Score: {score} out of {total} ({percentage}%)
        </p>
        <p className="text-md mb-6 text-gray-300">
          {feedback || "No feedback available."}
        </p>
        <button
          className={`btn btn-accent mb-4 ${
            isLoading ? "loading" : ""
          } animate__animated animate__pulse`}
          onClick={handleViewReport}
          disabled={!questions.length || !answers.length || isLoading}
        >
          {!isLoading && "View Detailed Report"}
        </button>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>

      {showReport && (
        <dialog className="modal modal-open" style={{ zIndex: 1000 }}>
          <div className="modal-box bg-base-200 max-w-4xl p-6 rounded-lg animate__animated animate__slideInDown">
            <h3 className="font-bold text-xl mb-4 text-white">
              Detailed Feedback Report
            </h3>
            <div className="max-h-96 overflow-y-auto pr-2">
              {questions.length === 0 ? (
                <p className="text-error">No questions available to display.</p>
              ) : answers.length === 0 ? (
                <p className="text-warning">No answers recorded.</p>
              ) : (
                questions.map((q, index) => {
                  const feedback = getAnswerFeedback(q._id);
                  return (
                    <div
                      key={q._id}
                      className="mb-4 p-4 bg-base-300 rounded-lg border border-base-100"
                    >
                      <p className="font-semibold text-gray-100">
                        Q{index + 1}: {q.text}
                      </p>
                      <p className="text-gray-400 mt-1">
                        Your Answer:{" "}
                        {answers.find((a) => a.questionId === q._id)?.answer ||
                          "Not answered"}
                      </p>
                      <p className={`${feedback.color} mt-1`}>
                        Feedback: {feedback.text}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
            <div className="modal-action mt-6">
              <button
                className="btn btn-secondary"
                onClick={() => setShowReport(false)}
                disabled={isLoading}
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Result;
