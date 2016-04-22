import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {

        if (controller.get('workout') === null) {
            controller.set('workout', this.store.createRecord('workout'));
        }

    },
    resetController(controller, isExiting) {

        if (isExiting) {
            controller.set('errorMessage', '');
        }

    },
    actions: {
        error(error, transition) {

            if (error && error.status === 500) {
                console.log(error, transition);
            }

            // Return true to bubble this event to any parent route.
            return true;

        }
    }
});
