const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database/database.js');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('dist'));

app.post('/login', (req, res) => {
  if (req.body.option === 'signup') {
    db.newUser(req.body.name, req.body.pw, (err, response) => {
      if (err) throw err;
      res.send({ response })
    })
  }
})

app.listen(port, console.log(`Listening on port ${port}`));