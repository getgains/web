import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    /**
     * Catch incorrect URLs
     */
    this.route('catchall', {
        path: '/*wildcard'
    });

    this.route('register');
    this.route('login');

    this.route('profile', function() {
        this.route('photo');
    });

    this.route('workout', function() {
        this.route('create');
        this.route('categories');
        this.route('exercises', {
            path: '/categories/:id/exercises'
        });
        this.route('edit', {
            path: '/:workout_id'
        });
    });

    this.route('admin', function() {
        this.route('category', function() {
            this.route('create');
            this.route('edit', {
                path: '/:category_id'
            });
        });
        this.route('exercise', function() {
            this.route('create');
            this.route('edit', {
                path: '/:exercise_id'
            });
        });
    });

});

export default Router;
