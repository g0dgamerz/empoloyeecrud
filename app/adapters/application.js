/* eslint-disable ember/no-jquery */
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import $ from 'jquery';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';
  host = 'https://localhost:7108';

  findAll(store, type) {
    let url = `${this.host}/${this.namespace}/${type.modelName}`;
    return $.get(url);
  }
  findRecord(store, type, id) {
    let url = `${this.host}/${this.namespace}/${type.modelName}/${id}`;
    return $.get(url);
  }
  deleteRecord(store, type, snapshot) {
    return $.ajax({
      type: 'DELETE',
      url: `${this.host}/${this.namespace}/${type.modelName}/${snapshot.id}`,
    });
  }
  createRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    console.log(JSON.stringify(data.employee));
    return $.ajax({
      type: 'POST',
      url: `${this.host}/${this.namespace}/${type.modelName}`,
      data: JSON.stringify(data.employee),
      contentType: 'application/json',
    });
  }
  updateRecord(store, type, snapshot) {
    let data = {};
    let serializer = store.serializerFor(type.modelName);
    serializer.serializeIntoHash(data, type, snapshot);
    console.log('test');
    console.log(JSON.stringify(data.employee));
    //console.log(data.employee);
    return $.ajax({
      type: 'PUT',
      url: `${this.host}/${this.namespace}/${type.modelName}/${snapshot.id}`,
      data: JSON.stringify(data.employee),
      contentType: 'application/json',
    });
  }
}
