import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        create() {

            let category = this.store.createRecord('category', this.getProperties('name'));

            this.set('isProcessing', true);

            category.save().then(() => {
                this.set('isProcessing', false);
                this.transitionToRoute('admin.category');
            }).catch((error) => {
                this.set('isProcessing', false);
                this.set('errorMessage', "Category failed to save.");
            });
        },
        cancel() {
            this.transitionToRoute('admin.category');
        }
    }
});
