const mongoose = require('mongoose');

const MonthlyPickSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a text field'],
  },
  author: { type: String, required: true },
  imageUrl: { type: String },
  pagecount: { type: String },
  month: { type: String, required: true },
  member: { type: String },
});

module.exports = mongoose.model('MonthlyPick', MonthlyPickSchema);
