const db = require('../models');

module.exports = function(app) {

    // API: query all workouts from database and send to view engine as JSON
    app.get('/api/workouts', (req, res) => {
        db.Workout.find()
            .then(data => { res.json(data); })
            .catch(err => { res.json(err); })
        ;
    });    

    // API: establishes new workout in database (New Workout)
    app.post('/api/workouts', (req, res) => {
        db.Workout.create({})
            .then(data => { res.json(data); })
            .catch(err => { res.json(err); })
        ;
    });

    // API: adds new workout to activity session
    app.put('/api/workouts/:id', ({ body, params }, res) => {
        db.Workout.findByIdAndUpdate( params.id, { $push: { exercises: body } })
            .then(data => { res.json(data); })
            .catch(err => { res.json(err); })
        ;
    });

    // API: query last 7 workouts from database and send to view engine as JSON
    app.get('/api/workouts/range', (req, res) => {
    db.Workout.find({}).limit(7)
        .then(data => { res.json(data); })
        // console.log(data)
        .catch(err => { res.json(err); });
    });
}