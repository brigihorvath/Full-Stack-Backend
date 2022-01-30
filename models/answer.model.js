const { Schema, model } = require('mongoose');

const AnswerSchema = new Schema({
  answer: {
    type: String,
    trim: true,
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  },
  likes: {
    type: Number,
    default: 0,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = model('Answer', AnswerSchema);
