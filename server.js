const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
  res.send('Welcome to my book club app.');
});

app.listen(port, () => {
  console.log(`Book Clerb API is listening on port ${port}`);
});
