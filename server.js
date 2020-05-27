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

if ( process.env.NODE_ENV === 'production') {
    mongoose.connect( `mongodb://codebak:gv3TP6rY@ds013475.mlab.com:13475/heroku_vssfpts5`, { useNewUrlParser: true });
} else {
    mongoose.connect( process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });
}

app.listen(PORT, () => {
   
    console.log(`Server listening on port ${PORT}`);
});