const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const mongoose = require('mongoose');
const logger = require('morgan');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(logger('dev'));

require('./routes/apiRoutes.js')(app);
require('./routes/viewRoutes.js')(app);

mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});