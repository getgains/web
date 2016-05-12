import DS from 'ember-data';

export default DS.Model.extend({
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
