const { Schema, model } = require('mongoose');

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: [true, 'Please provide a tour name'],
    trim: true,
  },
  answer: {
    type: [Schema.Types.ObjectId],
    ref: 'Answer',
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

module.exports = model('Question', TourSchema);
