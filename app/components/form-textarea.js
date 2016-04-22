import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'fieldset',
    classNames: ['form-group'],
    attributeBindings: ['value', 'maxlength'],
    charactersRemaining: 0,
    willInsertElement() {
        this.set('charactersRemaining', this.get('maxlength'));
    },
    updateCounter: Ember.observer('value', function() {
        if (this.get('maxlength')) {
            let input_max = this.get('maxlength'),
                input_val = this.get('value'),
                input_count = input_val.length,
                input_remaining = input_max - input_count;

            this.set('charactersRemaining', input_remaining);
        }
    })
});
