import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    createdAt: DS.attr('string', {
        defaultValue() {
            var date = new Date();
            date = date.toDateString();
            return date;
        }
    }),
    category: DS.belongsTo('category')
});
