import RESTSerializer from '@ember-data/serializer/rest';

export default class ApplicationSerializer extends RESTSerializer {
  primaryKey = 'employeeID';

  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = { employee: payload };
    console.log(payload);
    return super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType
    );
  }
}
