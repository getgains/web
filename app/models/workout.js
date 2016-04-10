import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    introduction: DS.attr(),
    difficulty: DS.attr(),
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
    exercises: DS.hasMany('exercise', {
        async: true
    })
});
