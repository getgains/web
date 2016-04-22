import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['form-increment'],
    actions: {
        increment() {

            let value = this.get('value');
            this.set('value', value++);

        },
        decrement() {

            let value = this.get('value');
            this.set('value', value--);

        }
    },
    onchange: Ember.observer('value', function() {

        console.log('changed');

    })
});
