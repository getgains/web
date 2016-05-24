import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        create() {

            let record = this.store.createRecord('category', this.getProperties('name'));

            this.set('isProcessing', true);

            record.save().then(() => {
                this.transitionToRoute('admin.category');
            }).catch((error) => {
                this.set('errorMessage', "Category failed to save." + error);
            }).finally(() => {
                this.set('isProcessing', false);
            });

        },
        cancel() {
            this.transitionToRoute('admin.category');
        }
    }
});
