const router = require('express').Router();
const Question = require('../models/question.model');
const Answer = require('../models/answer.model');
const axios = require('axios');

// CRUD - Create
router.post(
  '/questions/create',
  // fileUploader.single('tour-cover-image'),
  async (req, res) => {
    try {
      const question = req.body;
      console.log(req.body);

      const newQuestion = await Question.create({
        question,
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
module.exports = router;
