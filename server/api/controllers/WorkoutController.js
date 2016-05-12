/**
 * WorkoutController
 *
 * @description :: Server-side logic for managing workout
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    all: function(req, res, next) {
        Workout.find().sort('name ASC').exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    workout: data
                });
            }
        });
    },
    userWorkout: function(req, res, next) {
        Workout.findById(req.param('id')).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    workout: data
                });
            }

        });
    },
    create: function(req, res, next) {
        var new_workout = req.param("workout");

        if (!new_workout.name) {
            return res.send(400, 'Name cannot be blank.');
        }

        Workout.create([{
            name: new_workout.name,
            content: new_workout.content
        }]).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    workout: data
                });
            }
        });
    },
    edit: function(req, res, next) {

    },
    delete: function(req, res, next) {

        Workout.destroy({
            id: req.params.id
        }).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    workout: data
                });
            }
        });

    }
};
