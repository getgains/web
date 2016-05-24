import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

UpUp.start({
    'content-url': '/index.html',
    'assets': [
        '/assets/gains.css',
        '/assets/vendor.css',
        '/assets/gains.js',
        '/assets/vendor.js'
    ]
});

loadInitializers(App, config.modulePrefix);

export default App;
