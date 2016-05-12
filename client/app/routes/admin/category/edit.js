import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        error(data, transition) {

            if (data && data.errors[0].status == 400) {
                return this.transitionTo('categories');
            }

            // Return true to bubble this event to any parent route.
            return true;

        }
    }
});
