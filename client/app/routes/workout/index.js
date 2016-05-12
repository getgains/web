import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(transition) {

        let controller = this.controllerFor('workout.create');

        console.log(controller.get('workout'));

        if (controller.get('workout') !== null) {
            controller.set('name', '');
            controller.set('notes', '');
            controller.get('workout').destroyRecord();
            controller.set('workout', null);
        }

        console.log(controller.get('workout'));

    },
    model() {

        return this.store.findAll('workout');

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
