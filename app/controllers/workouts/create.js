import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        create: function() {
            let workout = this.store.createRecord('workout', this.getProperties('name'));

            this.set('isProcessing', true);

            workout.save().then(() => {
                this.transitionToRoute('workout', workout);
            }).catch((error) => {
                this.set('isProcessing', false);
                this.set('errorMessage', "Workout failed to save.");
            });
        },
        cancel: function() {
            this.transitionToRoute('workout');
        }
    }
});
