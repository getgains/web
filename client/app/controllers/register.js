import ENV from '../config/environment';
import Ember from 'ember';

export default Ember.Controller.extend({
    validations: {
        firstname: {
            presence: true
        },
        lastname: {
            presence: true
        },
        identification: {
            presence: true
        },
        password: {
            presence: true
        },
        confirmPassword: {
            presence: true
        }
    },
    actions: {
        register() {

            Ember.$.ajax({
                type: 'POST',
                url: ENV.apiBaseUrl + '/api/register',
                context: this,
                data: this.getProperties('firstname', 'lastname', 'email', 'password', 'confirmPassword')
            }).done(function() {
                this.transitionToRoute('login');
            }).fail(function(xhr) {
                this.set('errorMessage', xhr.responseText);
            });

        }
    }
});
