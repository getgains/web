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

            let workout = this.get('workout');
            workout.setProperties({
                name: this.get('name'),
                notes: this.get('notes')
            });
            workout.save().then(() => {
                this.set('isProcessing', false);
                this.transitionToRoute('workout');
            }).catch((error) => {
                this.set('isProcessing', false);
                this.set('errorMessage', "Workout failed to save.");
            });

        },
        cancel() {

            this.transitionToRoute('workout');

        },
        selectCategory(category) {

            this.set('category', category);

        }
    }
});
