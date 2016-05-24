import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    workout: null,
    category: null,
    exercises: [],
    actions: {
        create() {

            this.set('isProcessing', true);

            const workout = this.get('workout');
            workout.setProperties({
                name: this.get('name'),
                notes: this.get('notes')
            });
            workout.save().then(() => {
                this.transitionToRoute('workout');
            }).catch((error) => {
                this.set('errorMessage', "Workout failed to save.");
            }).finally(() => {
                this.set('isProcessing', false);
            });

        },
        cancel() {

            this.transitionToRoute('workout');

        },
        selectCategory(category) {

            this.set('category', category);

        },
        deleteRow() {
            console.log('test');
        }
    }
});
