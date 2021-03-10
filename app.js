const express = require('express')
const app = express();
const port = 8000;

app.use(express.json())

app.post('/', (req, res) => {
  if (req.body.data === 'fizz') {
    res.send('buzz')
  } else if (req.body.data === 'buzz') {
    res.send('fizz')
  } else {
    res.send('MC BC')
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
