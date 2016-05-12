import Ember from 'ember';

export function hiphenate(...val) {
    val.forEach(function(i, j) {
        console.log(i, j);
    })
}

export default Ember.Helper.helper(hiphenate);
