const router = require('express').Router();
const Question = require('../models/question.model');
const Answer = require('../models/answer.model');
const axios = require('axios');

// CRUD - Create
router.post(
  '/questions/create',
  //   (req, res) => {
  //     console.log(req.body);
  //     res.status(200).json('no');
  //   }
  // fileUploader.single('tour-cover-image'),
  async (req, res) => {
    try {
      const question = req.body.content;
      const answer = '';
      const likes = 0;

      const newQuestion = await Question.create({
        question,
        answer,
        likes,
      });
      // console.log(newTour);
      res.status(201).json({
        status: 'success',
        data: {
          content: newQuestion,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
);

//README.
router.get('/questions/create', (req, res) => {
  console.log(req);
});
module.exports = router;
