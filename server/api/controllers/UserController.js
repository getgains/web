/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    register: function(req, res, next) {

        if (!req.body.firstname) {
            return res.send(400, 'First Name cannot be blank.');
        }

        if (!req.body.lastname) {
            return res.send(400, 'Last Name cannot be blank.');
        }

        if (!req.body.email) {
            return res.send(400, 'Email cannot be blank.');
        }

        if (!req.body.password) {
            return res.send(400, 'Password cannot be blank.');
        }

        if (req.body.password !== req.body.confirmPassword) {
            return res.send(400, 'Passwords do not match.');
        }

        User.create([{
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
            admin: false
        }]).exec(function(err, user) {
            if (err) return res.send(500, err.message);
            res.send(200);
        });

    },
    getUser: function(req, res, next) {

        if (typeof req.param('id') == "undefined") {
            res.badRequest({
                error: 'Requires User ID.'
            });
        }

        User.findById(req.param('id')).exec(function(err, user) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else if (!user || user.length < 1) {
                res.badRequest({
                    error: 'User does not exist.'
                });
            } else {
                res.send({
                    user: user
                });
            }
        });

    },
    findUser: function(req, res, next) {

        if (typeof req.param('id') == "undefined") {
            res.badRequest({
                error: 'Requires User ID.'
            });
        }

        User.findById(req.param('id')).exec(function(err, user) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else if (!user || user.length < 1) {
                res.badRequest({
                    error: 'User does not exist.'
                });
            } else {
                res.send({
                    user: user
                });
            }
        });

    },
    edit: function(req, res, next) {

        User.update([{
            firstname: req.param("firstname"),
            lastname: req.param("lastname"),
            email: req.param("email"),
            password: req.param("password")
        }]).exec(function(err, user) {
            if (err) return res.send(500, err.message);
            res.send(200);
        });

    },

    delete: function(req, res, next) {

        User.destroy({
            id: req.params.id
        }).exec(function(err) {
            if (err) return res.send(500, err.message);
            res.send(200);
        });

    },

    photo: function(req, res, next) {

    }
}
