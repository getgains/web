/**
 * CategoryController
 *
 * @description :: Server-side logic for managing category
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    all: function(req, res, next) {
        Category.find().sort('name ASC').exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    category: data
                });
            }
        });
    },
    find: function(req, res, next) {

        Category.find({
            id: req.params.id
        }).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    category: data
                });
            }
        });

    },
    create: function(req, res, next) {

        if (!req.param("category").name) {
            return res.send(400, 'Name cannot be blank.');
        }

        Category.create([{
            name: req.param("category").name
        }]).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    category: data
                });
            }
        });
    },
    edit: function(req, res, next) {

        Category.update({
            id: req.params.id
        }, {
            name: req.param("category").name
        }).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    category: data
                });
            }
        });

    },
    delete: function(req, res, next) {

        Category.destroy({
            id: req.params.id
        }).exec(function(err, data) {
            if (err) {
                res.badRequest({
                    error: err
                });
            } else {
                res.send({
                    category: data
                });
            }
        });

    }
};
