import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    category: null,
    actions: {
        create() {

            this.set('isProcessing', true);

            let record = this.store.createRecord('exercise', {
                name: this.get('name')
            });

            this.store.findRecord('category', this.get('category')).then((category) => {

                record.set('category', category);
                record.save().then((exercise) => {

                    category.get('exercises').then((categoryExercises) => {

                        categoryExercises.pushObject(exercise);
                        category.save().then(() => {
                            this.set('isProcessing', false);
                            this.transitionToRoute('admin.exercise');
                        });

                    });

                }).catch((error) => {

                    this.set('isProcessing', false);
                    this.set('errorMessage', "Exercise failed to save.");

                });
            });

        },
        cancel() {

            this.transitionToRoute('admin.exercise');

        },
        selectCategory(id) {

            this.set('category', id);

        }
    }
});
