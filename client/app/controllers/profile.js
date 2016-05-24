import Ember from 'ember';

export
default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isEdit: false,
    updated: 0,
    actions: {
        edit() {

            this.set('isEdit', true);

        },
        save() {

            this.set('isProcessing', true);

            this.store.findRecord('user', session.data.authenticated.user.id).then((user) => {

                user.set('firstname', this.getProperties('firstname'));
                user.set('lastname', this.getProperties('lastname'));
                user.set('email', this.getProperties('email'));
                user.set('password', this.getProperties('password'));
                user.set('sex', this.getProperties('sex'));
                user.set('height', this.getProperties('height'));
                user.set('weight', this.getProperties('weight'));

                user.save().then(() => {
                    this.set('updated', 1);
                }).catch((error) => {
                    this.set('errorMessage', "Profile update failed.");
                }).finally(() => {
                    this.set('isProcessing', false);
                });

            });

        },
        cancel() {

            this.set('isEdit', false);

        }
    }
});
