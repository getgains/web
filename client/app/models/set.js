import DS from 'ember-data';

export default DS.Model.extend({
    exercise: DS.belongsTo('exercise'),
    weight: DS.attr('number'),
    rep: DS.attr('number'),
    failure: DS.attr('boolean'),
    assist: DS.attr('boolean'),
    createdAt: DS.attr('date'),
    rev: DS.attr('string')
});
