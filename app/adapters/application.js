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
}
