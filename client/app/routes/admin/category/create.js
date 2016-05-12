import Ember from 'ember';

export default Ember.Route.extend({
    resetController(controller, isExiting) {

        if (isExiting) {
            controller.set('errorMessage', '');
            controller.set('name', '');
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
