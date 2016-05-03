/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
    var app = new EmberApp(defaults, {
        styleProcessorOptions: {
            processors: [{
                type: 'sass'
            }, {
                type: 'postcss',
                plugins: [{
                    module: require('autoprefixer'),
                    options: {
                        browsers: [
                            'last 2 versions'
                        ]
                    }
                }, {
                    module: require('rucksack-css')
                }, {
                    module: require('lost')
                }]
            }],
            extension: 'scss'
        }
    });

    /**
     * styles
     */
    app.import('bower_components/dragula/dist/dragula.min.css');

    /**
     * scripts
     */
    app.import('bower_components/fastclick/lib/fastclick.js');
    app.import('bower_components/dragula/dist/dragula.min.js');
    app.import('vendor/animations/index.js');

    /*
     * fonts
     */
    /*    app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
            destDir: 'fonts'
        });*/

    // Use `app.import` to add additional libraries to the generated
    // output files.
    //
    // If you need to use different assets in different
    // environments, specify an object as the first parameter. That
    // object's keys should be the environment name and the values
    // should be the asset to use in that environment.
    //
    // If the library that you are including contains AMD or ES6
    // modules that you would like to import into your application
    // please specify an object with the list of modules as keys
    // along with the exports of each module as its value.

    return app.toTree();
};
