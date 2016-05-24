import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

var remote = new PouchDB('http://localhost:5984/gains');
var db = new PouchDB('gains');

db.sync(remote, {
    live: true, // do a live, ongoing sync
    retry: true // retry if the connection is lost
});

export default Adapter.extend(DataAdapterMixin, {
    db: db,
    host: ENV.apiBaseUrl,
    namespace: 'api',
    authorizer: 'authorizer:token',
    handleResponse(status, headers, payload) {
        // If the response is 422 (Unprocessable Entity) then format the errors into JSONAPI format
        if (status === 422 && payload.errors) {
            let error_response = [];
            for (var key in payload.errors) {
                error_response.push({
                    id: key,
                    title: payload.errors[key][0]
                });
            }
            return new DS.InvalidError(error_response);
        }
        return this._super(...arguments);
    }
});
