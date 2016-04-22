import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service(),
    isProcessing: false,
    actions: {
        authenticate() {
            let credentials = this.getProperties('identification', 'password'),
                authenticator = 'authenticator:jwt';

            this.set('isProcessing', true);

            this.get('session').authenticate(authenticator, credentials).catch((message) => {
                // this.set('isProcessing', false);
                this.set('errorMessage', message.message);
            });

        }
    }
});
