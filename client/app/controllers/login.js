import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isProcessing: false,
    actions: {
        authenticate() {
            let { identification, password } = this.getProperties('identification', 'password'),
                authenticator = 'authenticator:oauth2';

            this.set('isProcessing', true);

            this.get('session')
                .authenticate(authenticator, identification, password)
                .then((message) => {
                    this.set('isProcessing', false);
                    this.transitionToRoute('index');
                })
                .catch((message) => {
                    this.set('isProcessing', false);
                    this.set('errorMessage', message.error || message);
                });

        }
    }
});
