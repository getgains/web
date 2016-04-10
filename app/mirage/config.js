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
            db.Users.insert(data);
            return {
                users: [db.Users[0]],
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
            return db.users.insert(data);
        } else {
            return new Mirage.Response(400, { some: 'header' }, { message: 'name cannot be blank' });
        }
    });
    /**
     * Workouts
     * @param  {[type]} ) {                   return {            data: [{                type: 'workout',                id: 1,                attributes: {                    name: 'destroyer',                    introduction: 'This is gonna hurt!',                    difficulty: 5                }            }]        };    } [description]
     * @return {[type]}   [description]
     */
    this.get('api/workouts', function() {
        return {
            data: [{
                type: 'workout',
                id: 1,
                attributes: {
                    name: 'destroyer',
                    introduction: 'This is gonna hurt!',
                    difficulty: 5
                }
            }]
        };
    });

    this.post('/api/workouts', function(db, request) {

        var data = JSON.parse(request.requestBody).data.attributes;

        if (data.name) {
            return db.Workouts.insert(data);
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }
    });

    this.get('api/workouts/:id', function() {
        return {
            data: {
                type: 'workout',
                id: 1,
                attributes: {
                    name: 'destroyer',
                    introduction: 'This is gonna hurt!',
                    difficulty: 5
                }
            }
        };
    });
    /**
     * Exercises
     * @param  {[type]} )                   {                                return {                 data:  [{                   type: 'exercise',                               id: 1,                     attributes: {                                    name: 'Dumbbell Curl',                    category: 'Arms'                }            } [description]
     * @param  {[type]} options.type:       'exercise'    [description]
     * @param  {[type]} options.id:         2             [description]
     * @param  {[type]} options.attributes: {                                                    name: 'EZbar Curl',                                    category: 'Arms'                     }            }]                     }; [description]
     * @return {[type]}                     [description]
     */
    this.get('api/exercises', function() {
        return {
            data: [{
                type: 'exercise',
                id: 1,
                attributes: {
                    name: 'Dumbbell Curl',
                    category: 'Arms'
                }
            }, {
                type: 'exercise',
                id: 2,
                attributes: {
                    name: 'EZbar Curl',
                    category: 'Arms'
                }
            }]
        };
    });

    this.get('api/exercises/:id', function() {
        return {
            data: {
                type: 'exercise',
                id: 1,
                attributes: {
                    name: 'Dumbbell Curl',
                    category: 'Arms'
                }
            }
        };
    });

    this.post('/api/exercises', function(db, request) {

        var data = JSON.parse(request.requestBody).data.attributes;

        if (data.name) {
            return db.Exercises.insert(data);
        } else {
            return new Mirage.Response(400, {
                some: 'header'
            }, {
                message: 'name cannot be blank'
            });
        }
    });

}
