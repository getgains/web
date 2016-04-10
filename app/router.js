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
    this.route("profile");

    this.route("exercises", function() {
        this.route("create");
        this.route('edit', {
            path: '/:id'
        });
    });
    this.route("workouts", function() {
        this.route("create");
        this.route('edit', {
            path: '/:id'
        });
    });

});

export default Router;
