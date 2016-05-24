import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['form-select'],
    actions: {
        selectOption(id) {

            this.set('option', id);

        }
    }
});
