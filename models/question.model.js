const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema({
  question: {
    type: Object,
    required: [true, 'Please provide a tour name'],
    trim: true,
  },
  answer: {
    type: String,
    ref: 'Answer',
    default: '',
  },
  likes: {
    type: Number,
    default: 0,
  },
});

module.exports = model('Question', QuestionSchema);
