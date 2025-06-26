import mongoose from 'mongoose'

const scoreSchema = new mongoose.Schema({
  answers: [{
    questionId: String,
    answer: String
  }],
  score: Number,
  total: Number,
  feedback: String,
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('Score', scoreSchema)