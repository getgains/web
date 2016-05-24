import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        save() {

            this.set('isProcessing', true);
            this.model.save().then(() => {
                this.transitionToRoute('admin.category');
            }).catch((error) => {
                this.set('errorMessage', "Category update failed." + error);
            }).finally(() => {
                this.set('isProcessing', false);
            });

        },
        cancel() {
            this.transitionToRoute('admin.category');
        }
    }
});
