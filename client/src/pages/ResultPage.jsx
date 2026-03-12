import { useLocation } from 'react-router-dom'
import Result from '../components/Result'

function ResultPage() {
  const { state } = useLocation()
  const { score, total, feedback, questions, answers } = state || { score: 0, total: 0, feedback: 'No results available.', questions: [], answers: [] }

  return (
    <div className="flex justify-center items-center min-h-[80vh] relative z-10">
      <Result score={score} total={total} feedback={feedback} questions={questions} answers={answers} />
    </div>
  )
} 

export default ResultPage