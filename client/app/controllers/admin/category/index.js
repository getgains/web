import Ember from 'ember';

export
default Ember.Controller.extend({
    actions: {
        delete(id) {

            this.store.find('category', id).then((category) => {
                category.destroyRecord();
            });

        }
    }
});
