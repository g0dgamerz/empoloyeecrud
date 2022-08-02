/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable ember/no-jquery */
import JSONAPIAdapter from '@ember-data/adapter/json-api';
import { inject as service } from '@ember/service';
// eslint-disable-next-line ember/no-mixins
import TokenAdapterMixin from 'ember-simple-auth-token/mixins/token-adapter';
// eslint-disable-next-line ember/no-computed-properties-in-native-classes
// import { computed } from '@ember/object';
import $ from 'jquery';

class ApplicationAdapter extends JSONAPIAdapter {
  @service session;
  namespace = 'api';
  host = 'https://localhost:7108';

  // eslint-disable-next-line ember/use-brace-expansion
  // @computed('session.isAuthenticated', 'session.data.authenticated.token')
  // headers() {
  //   if (this.session.isAutenticated) {
  //     return {
  //       Authorization: `Bearer ${this.session.data.authenticated.token}`,
  //     };
  //   } else {
  //     return {};
  //   }
  // }
  // handleResponse(status) {
  //   if (status === 401 && this.session.isAutenticated) {
  //     this.session.invalidate();
  //   }
  //   return super.handleResponse(...arguments);
  // }
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

export default ApplicationAdapter.extend(TokenAdapterMixin);
