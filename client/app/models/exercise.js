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
    category: DS.belongsTo('category'),
    name: DS.attr('string'),
    sets: DS.hasMany('set'),
    createdAt: DS.attr('date')
});
