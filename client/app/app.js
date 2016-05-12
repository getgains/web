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

// ServiceWorker is a progressive technology. Ignore unsupported browsers
/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js').then(function() {
        console.log('CLIENT: service worker registration complete.');
    }, function() {
        console.log('CLIENT: service worker registration failure.');
    });
} else {
    console.log('CLIENT: service worker not supported.');
}
*/
loadInitializers(App, config.modulePrefix);

export default App;
