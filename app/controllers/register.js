import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    registered: false,
    isProcessing: false,
    actions: {
        register() {

            this.set('isProcessing', true);

            let credentials = this.getProperties('firstname', 'lastname', 'email', 'password'),
                user = this.store.createRecord('user', credentials);

            user.save().then(() => {
                this.set('isProcessing', false);
                this.set('registered', 1);
            }).catch((error) => {
                this.set('isProcessing', false);
                this.set('errorMessage', "Registration failed.");
            });
        }
    }
});
