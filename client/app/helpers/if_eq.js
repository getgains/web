import Ember from 'ember';

const if_eq = (params) => params[0] === params[1];
export default Ember.Helper.helper(if_eq);
