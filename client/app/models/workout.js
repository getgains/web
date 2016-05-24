import DS from 'ember-data';
import {
    validator,
    buildValidations
}
from 'ember-cp-validations';

const Validations = buildValidations({
    name: validator('presence', true)
});

export default DS.Model.extend(Validations, {
    user: DS.belongsTo('user'),
    name: DS.attr('string'),
    notes: DS.attr('string'),
    exercises: DS.hasMany('exercise'),
    createdAt: DS.attr('date')
});
