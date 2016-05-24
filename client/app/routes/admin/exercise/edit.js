import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {

        return {
            exercise: this.store.findRecord('exercise', params.exercise_id),
            categories: this.store.findAll('category')
        };

    },
    actions: {
        error(data, transition) {

            if (data && data.errors[0].status == 400) {
                return this.transitionTo('exercise');
            }

            // Return true to bubble this event to any parent route.
            return true;

        }
    }
});
