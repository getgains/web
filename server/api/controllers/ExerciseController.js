/**
 * ExerciseController
 *
 * @description :: Server-side logic for managing exercise
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    all: function(req, res, next) {

        Exercise.find({
            category: req.param("category")
        }).sort('name ASC').exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    exercise: data
                });
            }
        });

    },
    find: function(req, res, next) {

        Exercise.find({
            id: req.params.id
        }).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    exercise: data
                });
            }
        });

    },
    create: function(req, res, next) {

        if (!req.param("exercise").name) {
            return res.send(400, 'Name cannot be blank.');
        }

        Exercise.create([{
            name: req.param("exercise").name,
            category: req.param("exercise").category
        }]).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    exercise: data
                });
            }
        });

    },
    edit: function(req, res, next) {

        Exercise.update({
            id: req.params.id
        }, {
            name: req.param("exercise").name
        }).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    exercise: data
                });
            }
        });

    },
    delete: function(req, res, next) {

        Exercise.destroy({
            id: req.params.id
        }).exec(function(err) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    exercise: data
                });
            }
        });

    }
};
