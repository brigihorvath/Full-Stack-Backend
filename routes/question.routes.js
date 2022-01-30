const router = require('express').Router();
const Question = require('../models/question.model');
const Answer = require('../models/answer.model');
const axios = require('axios');

// CRUD - Create
router.post(
  '/questions/create',
  (req, res) => {
    console.log(req.body);
  }
  // fileUploader.single('tour-cover-image'),
  //   async (req, res) => {
  //     try {
  //       const question = req.body;
  //       console.log(req.body);

  //       const newQuestion = await Question.create({
  //         question,
  //       });
  //       // console.log(newTour);
  //       res.status(201).json({
  //         status: 'success',
  //         data: {
  //           content: newQuestion,
  //         },
  //       });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
);

//README.
router.get('/', (req, res) => {
  console.log('get here');
});
module.exports = router;
