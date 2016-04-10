import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        error: function(error, transition) {
            if (error && error.status === 400) {
                return this.transitionTo('index');
            }

            // Return true to bubble this event to any parent route.
            return true;
        }
    },
    model: function() {
        return this.store.findAll('exercise');
    }
});
