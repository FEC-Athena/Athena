const express = require('express');
const port = 3000;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('hi')

})

app.listen(port,() => {
  console.log(`Listening to Port ${port}, good luck Houston.`)

});

