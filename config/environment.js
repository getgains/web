/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'gains',
        environment: environment,
        baseURL: '/',
        apiBaseUrl: 'http://localhost:1337',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    ENV['ember-simple-auth'] = {
        authorizer: 'authorizer:token'
    };

    ENV['ember-simple-auth-token'] = {
        refreshAccessTokens: true,
        timeFactor: 1000,
        refreshLeeway: 300,
        serverTokenEndpoint: ENV.apiBaseUrl + '/api/auth/login',
        serverTokenRefreshEndpoint: ENV.apiBaseUrl + '/api/auth/token-refresh',
        identificationField: 'email'
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        ENV.APP.LOG_TRANSITIONS = true;
        ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
