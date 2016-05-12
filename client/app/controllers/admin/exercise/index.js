import Ember from 'ember';

export
default Ember.Controller.extend({
    actions: {
        delete(id) {

            this.store.find('exercise', id).then((exercise) => {
                exercise.destroyRecord();
            });

        }
    }
});
