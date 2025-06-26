import { useState } from 'react'

function Quiz({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, { questionId: questions[currentQuestion]._id, answer }]
    setAnswers(newAnswers)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      onComplete(newAnswers)
    }
  }

  if (!questions || questions.length === 0) {
    return <div className="alert alert-error">No questions available</div>
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="card bg-base-100 shadow-xl p-6 animate__animated animate__fadeIn">
      <progress className="progress progress-primary w-full" value={progress} max="100"></progress>
      <h2 className="text-2xl font-bold mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
      <p className="text-lg mb-4">{questions[currentQuestion].text}</p>
      <p className="text-sm text-gray-400 mb-4">{questions[currentQuestion].info}</p>
      <div className="flex gap-4">
        <button className="btn btn-success animate__animated animate__bounceIn" onClick={() => handleAnswer('Yes')}>Yes</button>
        <button className="btn btn-error animate__animated animate__bounceIn" onClick={() => handleAnswer('No')}>No</button>
      </div>
    </div>
  )
}

export default Quiz