import Mirage from 'ember-cli-mirage';

export default function() {
    /**
     * Login
     * @param  {[type]} 'http:                     var data [description]
     * @return {[type]}        [description]
     */
    this.post('http://api/auth/login', function(db, request) {

        var data = JSON.parse(request.requestBody);

        if (data.email && data.password) {
            db.users.insert(data);
            return {
                users: [db.users[0]],
                token: "PA$$WORD"
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'Email cannot be blank'
            });
        }

    });
    /**
     * Users
     * @return {[type]} [description]
     */
    this.get('api/users', function() {
        return {
            data: [{
                type: 'user',
                id: 1,
                attributes: {
                    firstname: 'Ben',
                    lastname: 'Simpson',
                    sex: 1,
                    height: '5-5',
                    weight: 85,
                    email: 'benjo696@gmail.com',
                    password: 'test123'
                }
            }, {
                type: 'user',
                id: 2,
                attributes: {
                    firstname: 'Jake',
                    lastname: 'Cleary',
                    sex: 1,
                    height: '5-9',
                    weight: 75,
                    email: 'jake.cleary@gmail.com',
                    password: 'test123'
                }
            }]
        };
    });

    this.post('/api/users', function(db, request) {

        var data = JSON.parse(request.requestBody).data.attributes;

        if (data.name) {
            return {
                data: db.users.insert(data)
            };
        } else {
            return new Mirage.Response(400, { some: 'header' }, { message: 'name cannot be blank' });
        }
    });
    /**
     * Categories
     * @param  {[type]} ) {                   return {            data: [{                type: 'workout',                id: 1,                attributes: {                    name: 'destroyer',                    introduction: 'This is gonna hurt!',                    difficulty: 5                }            }]        };    } [description]
     * @return {[type]}   [description]
     */
    this.get('api/categories', function(db, request) {

        return {
            data: db.categories
        };

    });

    this.get('api/categories/:id', function(db, request) {

        var id = request.params.id,
            category = db.categories.find(id);

        if (category) {
            return {
                data: category
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

    this.post('api/categories', function(db, request) {

        var attrs = JSON.parse(request.requestBody).data;

        if (attrs.attributes.name) {
            return {
                data: db.categories.insert(attrs)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }
    });

    this.patch('api/categories/:id', function(db, request) {

        var id = request.params.id,
            attrs = JSON.parse(request.requestBody).data;

        if (attrs.attributes.name) {
            return {
                data: db.categories.update(id, attrs)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

    this.delete('api/categories/:id', function(db, request) {

        var id = request.params.id;

        if (id) {
            return {
                data: db.categories.remove(id)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });
    /**
     * Workouts
     * @param  {[type]} ) {                   return {            data: [{                type: 'workout',                id: 1,                attributes: {                    name: 'destroyer',                    introduction: 'This is gonna hurt!',                    difficulty: 5                }            }]        };    } [description]
     * @return {[type]}   [description]
     */
    this.get('api/workouts', function(db, request) {

        return {
            data: db.workouts
        };

    });

    this.get('api/workouts/:id', function(db, request) {

        var id = request.params.id,
            workout = db.workouts.find(id);

        if (workout) {
            return {
                data: workout
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

    this.post('/api/workouts', function(db, request) {

        var attrs = JSON.parse(request.requestBody);

        if (attrs.data.attributes.name) {
            return {
                data: db.workouts.insert(attrs.data)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }
    });

    this.patch('api/workouts/:id', function(db, request) {

        var id = request.params.id;
        var attrs = JSON.parse(request.requestBody).data;

        if (attrs.attributes.name) {
            return {
                data: db.workouts.update(id, attrs)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

    this.delete('api/workouts/:id', function(db, request) {

        var id = request.params.id;

        if (id) {
            return {
                data: db.workouts.remove(id)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });
    /**
     * Exercises
     * @param  {[type]} )                   {                                return {                 data:  [{                   type: 'exercise',                               id: 1,                     attributes: {                                    name: 'Dumbbell Curl',                    category: 'Arms'                }            } [description]
     * @param  {[type]} options.type:       'exercise'    [description]
     * @param  {[type]} options.id:         2             [description]
     * @param  {[type]} options.attributes: {                                                    name: 'EZbar Curl',                                    category: 'Arms'                     }            }]                     }; [description]
     * @return {[type]}                     [description]
     */
    this.get('api/exercises', function(db, request) {

        return {
            data: db.exercises
        };

    });

    this.get('api/exercises/:id', function(db, request) {

        var id = request.params.id,
            exercise = db.exercises.find(id);

        if (exercise) {
            return {
                data: exercise
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

    this.post('api/exercises', function(db, request) {

        var attrs = JSON.parse(request.requestBody).data;

        if (attrs.attributes.name) {
            return {
                data: db.exercises.insert(attrs)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }
    });

    this.patch('api/exercises/:id', function(db, request) {

        var id = request.params.id;
        var attrs = JSON.parse(request.requestBody).data;

        if (attrs.attributes.name) {
            return {
                data: db.exercises.update(id, attrs)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

    this.delete('api/exercises/:id', function(db, request) {

        var id = request.params.id;

        if (id) {
            return {
                data: db.exercises.remove(id)
            };
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }

    });

}
