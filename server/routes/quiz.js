import express from 'express'
import Score from '../models/Score.js'
import questions from '../data/questions.js'

const router = express.Router()

router.get('/questions', (req, res) => {
  res.json(questions)
})

router.post('/score', async (req, res) => {
  const { answers, questions: reqQuestions } = req.body
  let score = 0
  const total = questions.length

  answers.forEach(answer => {
    const question = questions.find(q => q._id === answer.questionId)
    if (question && answer.answer === question.correctAnswer) {
      score += 1
    }
  })

  const percentage = (score / total) * 100
  let feedback = ''
  if (percentage >= 80) {
    feedback = 'Great job! You have a strong awareness of social engineering risks.'
  } else if (percentage >= 50) {
    feedback = 'Good effort, but consider learning more about social engineering to improve your cyber hygiene.'
  } else {
    feedback = 'You may be vulnerable to social engineering attacks. Review the question info to learn how to stay safe.'
  }

  const newScore = new Score({ answers, score, total, feedback })
  await newScore.save()

  res.json({ score, total, feedback, questions, answers })
})

export default router