import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
    type(i) {
        return `${i}`;
    },
    attributes: {
        name(i) {
            return `${i}`;
        },
        category(i) {
            return `${i}`;
        }
    },
    relationships: {

    }
});
