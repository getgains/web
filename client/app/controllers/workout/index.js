import Ember from 'ember';

export
default Ember.Controller.extend({
    actions: {
        delete(id) {

            this.store.find('workout', id).then((workout) => {
                workout.destroyRecord();
            });

        }
    }
});
