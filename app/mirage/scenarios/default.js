export default function(server) {

    server.create('user', {
        attributes: {
            firstname: 'Ben',
            lastname: 'Simpson',
            sex: 34,
            height: 56,
            weight: 80,
            email: 'benjo696@gmail.com',
            password: 'decker'
        },
        type: 'user'
    });

    server.create('category', {
        attributes: {
            name: 'Biceps'
        },
        type: 'category',
        relationships: {
            exercises: {
                data: [{
                    id: 1,
                    type: 'exercise'
                }]
            }
        }
    });

    server.create('category', {
        attributes: {
            name: 'Legs'
        },
        type: 'category'
    });

    server.create('exercise', {
        attributes: {
            name: 'Dumbbell Curls',
            category: 1
        },
        type: 'exercise'
    });

    server.create('exercise', {
        attributes: {
            name: 'Barbell Curls',
            category: 1
        },
        type: 'exercise'
    });

};
