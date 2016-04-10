import Ember from 'ember';

export
default Ember.Controller.extend({
    actions: {
        delete: function(id) {

            this.store.find('workout', id).then((workout) => {
                workout.destroyRecord();
            });

        }
    }
});
