import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        create: function() {
            let exercise = this.store.createRecord('exercise', this.getProperties('name', 'category'));

            this.set('isProcessing', true);

            exercise.save().then(() => {
                this.transitionToRoute('exercise', exercise);
            }).catch((error) => {
                this.set('isProcessing', false);
                this.set('errorMessage', "Exercise failed to save.");
            });
        },
        cancel: function() {
            this.transitionToRoute('exercise');
        }
    }
});
