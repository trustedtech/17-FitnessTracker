const express = require('express');
const app = express();

const mongoose = require('mongoose');
const logger = require('morgan');

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));

mongoose.connect('mongodb://localhost/fitnesstrack', { useNewUrlParser: true });

app.use(require('./routes/apiRoutes.js'));
app.use(require('./routes/viewRoutes.js'));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});