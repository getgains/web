import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['form-increment'],
    actions: {
        increment() {

            let value = this.get('value') + 1;
            this.set('value', value);

        },
        decrement() {

            let value = this.get('value') - 1;
            if (value < 0) value = 0;
            this.set('value', value);

        }
    }
});
