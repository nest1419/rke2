const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from NodeJS App 2!');
});

app.listen(port, () => {
  console.log(`App2 listening at http://localhost:${port}`);
});
