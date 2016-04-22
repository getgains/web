import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {

        this._super(controller, model);
        controller.set('category', 1);

    },
    resetController(controller, isExiting) {

        if (isExiting) {
            controller.set('errorMessage', '');
            controller.set('name', '');
        }

    },
    model() {

        return this.store.findAll('category');

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
