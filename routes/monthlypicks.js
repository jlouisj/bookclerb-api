const express = require('express');
const router = express.Router();
const MonthlyPick = require('../models/MonthlyPick');

// GET ALL MONTHLY PICKS \\
router.get('/', async (req, res) => {
  try {
    const picks = await MonthlyPick.find();
    res.send({ success: true, data: picks });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, error: 'Something went wrong' });
  }
});

// GET PICKS BY ID \\
router.get('/:id', async (req, res) => {
  try {
    const pick = await MonthlyPick.findById(req.params.id);
    res.send({ success: true, data: pick });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// ADD A NEW MONTHLY PICK
router.post('/', async (req, res) => {
  const pick = new MonthlyPick({
    title: req.body.title,
    author: req.body.author,
    imageUrl: req.body.imageUrl,
    pagecount: req.body.pagecount,
    month: req.body.month,
    member: req.body.member,
  });
  try {
    const newPick = await pick.save();
    res.send({ success: true, data: newPick });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Something went wrong' });
  }
});

// UPDATE A PICK
router.put('/:id', async (req, res) => {
  try {
    const pick = await MonthlyPick.findById(req.params.id);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
