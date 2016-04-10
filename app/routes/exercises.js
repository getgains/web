import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
    actions: {
        error: function(error, transition) {

            if (error && error.status === 400)
                return this.transitionTo('index');

            // Return true to bubble this event to any parent route.
            return true;

        }
    },
    model: function() {

        let id = this.get('session.content.secure.user.id');

        this.store.find('exercise', 1).then(function(exercises) {
            return exercises;
        });

    },
    willTransition: function() {

        this.set('isEdit', false);

    }
});
