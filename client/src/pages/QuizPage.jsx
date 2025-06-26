import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Quiz from '../components/Quiz'

function QuizPage() {
  const [questions, setQuestions] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/questions`)
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching questions:', error))
  }, [])

  const handleComplete = async (answers) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/score`, { answers, questions })
      navigate('/result', { state: response.data })
    } catch (error) {
      console.error('Error submitting answers:', error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <Quiz questions={questions} onComplete={handleComplete} />
    </div>
  )
}

export default QuizPage