import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    category: DS.attr('number'),
    createdAt: DS.attr('string', {
        defaultValue: function() {
            var date = new Date();
            date = date.toDateString();
            return date;
        }
    }),
    user: DS.belongsTo('user', {
        async: true
    }),
    workout: DS.belongsTo('workout', {
        async: true
    })
});
