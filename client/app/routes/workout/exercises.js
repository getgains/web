import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

        return this.store.findRecord('category', params.id);

    },
    actions: {
        error(error, transition) {

            if (error && error.status === 400) {
                return this.transitionTo('index');
            }

            // Return true to bubble this event to any parent route.
            return true;

        }
    }
});
