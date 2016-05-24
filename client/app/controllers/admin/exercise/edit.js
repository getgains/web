import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        save() {

            this.set('isProcessing', true);

            this.model.exercise.save().then(() => {
                this.transitionToRoute('admin.exercise');
            }).catch((error) => {
                this.set('errorMessage', "Exercise update failed." + error);
            }).finally(() => {
                this.set('isProcessing', false);
            });

        },
        cancel() {
            this.transitionToRoute('admin.exercise');
        }
    }
});
