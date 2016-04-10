import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        error: function(error, transition) {
            if (error && error.status === 500) {
                console.log(error, transition);
            }

            // Return true to bubble this event to any parent route.
            return true;
        }
    }
});
