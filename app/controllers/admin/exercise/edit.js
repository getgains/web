import Ember from 'ember';

export
default Ember.Controller.extend({
    isProcessing: false,
    actions: {
        save(model) {

            this.set('isProcessing', true);
            this.model.save().then(() => {
                this.set('isProcessing', false);
                this.transitionToRoute('exercise');
            }).catch((error) => {
                console.log(error);
                this.set('isProcessing', false);
                this.set('errorMessage', "Exercise update failed.");
            });

        },
        cancel() {
            this.transitionToRoute('exercise');
        }
    }
});
