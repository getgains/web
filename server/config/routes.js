/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

    /***************************************************************************
     *                                                                          *
     * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
     * etc. depending on your default view engine) your home page.              *
     *                                                                          *
     * (Alternatively, remove this and add an `index.html` file in your         *
     * `assets` directory)                                                      *
     *                                                                          *
     ***************************************************************************/

    /**
     * Authentication
     **/
    '/api/register': {
        controller: 'UserController',
        action: 'register'
    },
    '/api/token': {
        controller: 'AuthController',
        action: 'login'
    },
    '/api/auth/logout': {
        controller: 'AuthController',
        action: 'logout'
    },
    /**
     * Profile
     */

    'get /api/users/:id': {
        controller: 'UserController',
        action: 'findUser'
    },
    'put /api/users': {
        controller: 'UserController',
        action: 'edit'
    },
    'delete /api/users': {
        controller: 'UserController',
        action: 'delete'
    },
    /**
     * Workouts
     **/
    'get /api/workouts': {
        controller: 'WorkoutController',
        action: 'all'
    },
    'get /api/workouts/:id': {
        controller: 'WorkoutController',
        action: 'userWorkout'
    },
    'post /api/workouts': {
        controller: 'WorkoutController',
        action: 'create'
    },
    'put /api/workouts/:id': {
        controller: 'WorkoutController',
        action: 'edit'
    },
    'delete /api/workouts/:id': {
        controller: 'WorkoutController',
        action: 'delete'
    },
    /**
     * Categories
     **/
    'get /api/categories': {
        controller: 'CategoryController',
        action: 'all'
    },
    'get /api/categories/:id': {
        controller: 'CategoryController',
        action: 'find'
    },
    'post /api/categories': {
        controller: 'CategoryController',
        action: 'create'
    },
    'put /api/categories/:id': {
        controller: 'CategoryController',
        action: 'edit'
    },
    'delete /api/categories/:id': {
        controller: 'CategoryController',
        action: 'delete'
    },
    /**
     * Exercises
     **/
    'get /api/exercises': {
        controller: 'ExerciseController',
        action: 'all'
    },
    'get /api/exercises/:id': {
        controller: 'ExerciseController',
        action: 'find'
    },
    'post /api/exercises': {
        controller: 'ExerciseController',
        action: 'create'
    },
    'put /api/exercises/:id': {
        controller: 'ExerciseController',
        action: 'edit'
    },
    'delete /api/exercises/:id': {
        controller: 'ExerciseController',
        action: 'delete'
    },
    /***************************************************************************
     *                                                                          *
     * Custom routes here...                                                    *
     *                                                                          *
     * If a request to a URL doesn't match any of the custom routes above, it   *
     * is matched against Sails route blueprints. See `config/blueprints.js`    *
     * for configuration options and examples.                                  *
     *                                                                          *
     ***************************************************************************/
    '/*': {
        controller: 'App',
        action: 'serve',
        skipAssets: true,
        skipRegex: /^\/api\/.*$/
    }
};
