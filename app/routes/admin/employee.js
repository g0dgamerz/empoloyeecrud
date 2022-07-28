import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminEmployeeRoute extends Route {
  @service store;
  model() {
    console.log(this.store.findAll('employee'));
    return this.store.findAll('employee');
  }
}
