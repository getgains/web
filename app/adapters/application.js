import DS from 'ember-data';
import ENV from '../config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
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
