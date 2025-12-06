const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Welcome to my book club app.');
});

const picksRouter = require('./routes/monthlypicks');
app.use('/api/monthlypicks', picksRouter);

app.listen(port, () => {
  console.log(`Book Clerb API is listening on port ${port}`);
});
