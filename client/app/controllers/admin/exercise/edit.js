import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        save() {

            this.set('isProcessing', true);
            this.model.save().then(() => {
                this.set('isProcessing', false);
                this.transitionToRoute('admin.exercise');
            }).catch((error) => {
                this.set('isProcessing', false);
                this.set('errorMessage', "Exercise update failed." + error);
            });

        },
        cancel() {
            this.transitionToRoute('admin.exercise');
        }
    }
});
