const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(cors());
app.use(express.json());
app.use(morgan('combine'));
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
