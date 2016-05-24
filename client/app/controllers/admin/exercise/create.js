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

            const category = this.get('category');

            record.set('category', category);
            record.save().then((exercise) => {
                category.get('exercises').pushObject(exercise);
                this.transitionToRoute('admin.exercise');
            }).catch((error) => {
                this.set('errorMessage', "Exercise failed to save.");
            }).finally(() => {
                this.set('isProcessing', false);
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
