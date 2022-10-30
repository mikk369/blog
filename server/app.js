const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan('combine'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
