import Ember from 'ember';

export function eq(val, val2, block) {
    if (val == val2) {
        return block(this);
    }
}

export default Ember.Helper.helper(eq);
