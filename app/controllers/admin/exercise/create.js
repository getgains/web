import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    category: null,
    actions: {
        create() {

            this.set('isProcessing', true);

            let exercise = this.store.createRecord('exercise', {
                name: this.get('name')
            });

            this.store.findRecord('category', this.get('category')).then((category) => {
                exercise.set('category', category);
                category.get('exercises').pushObject(exercise);
                exercise.save().then(() => {

                    this.set('isProcessing', false);
                    this.transitionToRoute('exercise');

                }).catch((error) => {

                    this.set('isProcessing', false);
                    this.set('errorMessage', "Exercise failed to save.");

                });
            });

        },
        cancel() {

            this.transitionToRoute('exercise');

        },
        selectCategory(id) {

            this.set('category', id);

        }
    }
});
