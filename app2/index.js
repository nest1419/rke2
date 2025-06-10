// app2/index.js
const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('¡Hola desde Node.js App 2!');
});

app.listen(port, () => {
  console.log(`App2 escuchando en el puerto ${port}`);
});
