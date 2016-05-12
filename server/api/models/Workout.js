/**
 * Workout.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/#!documentation/models
 */

module.exports = {
    attributes: {
        name: {
            type: 'string'
        },
        notes: {
            type: 'string'
        },
        user: {
            model: 'user'
        },
        exercises: {
            collection: 'exercise'
        },
        createdAt: {
            type: 'string'
        }
    }
};
