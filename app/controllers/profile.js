import Ember from 'ember';

export
default Ember.Controller.extend({
    isEdit: false,
    updated: 0,
    actions: {
        edit() {

            this.set('isEdit', true);

        },
        save() {

            this.set('isProcessing', true);

            this.store.findRecord('user', 1).then((user) => {

                user.set('firstname', this.getProperties('firstname'));
                user.set('lastname', this.getProperties('lastname'));
                user.set('email', this.getProperties('email'));
                user.set('password', this.getProperties('password'));
                user.set('sex', this.getProperties('sex'));
                user.set('height', this.getProperties('height'));
                user.set('weight', this.getProperties('weight'));

                user.save().then(() => {
                    this.set('isProcessing', false);
                    this.set('updated', 1);
                }).catch((error) => {
                    this.set('isProcessing', false);
                    this.set('errorMessage', "Profile update failed.");
                });

            });

        },
        cancel() {

            this.set('isEdit', false);

        }
    }
});
