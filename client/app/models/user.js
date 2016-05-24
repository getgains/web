import DS from 'ember-data';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
    firstname: validator('presence', true),
    lastname: validator('presence', true),
    email: [
        validator('presence', true),
        validator('format', { type: 'email' })
    ],
    password: [
        validator('presence', true),
        validator('length', {
            min: 4
        })
    ]
});

export default DS.Model.extend(Validations, {
    firstname: DS.attr('string'),
    lastname: DS.attr('string'),
    sex: DS.attr('number'),
    height: DS.attr('number'),
    weight: DS.attr('number'),
    email: DS.attr('string'),
    password: DS.attr('string'),
    admin: DS.attr('boolean'),
    workouts: DS.hasMany('workout'),
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }.property('firstName', 'lastName')
});
