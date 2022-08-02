import Route from '@ember/routing/route';
// import type IntlService from 'ember-intl/services/intl';
import { inject as service } from '@ember/service';

export default class AdminEmployeeRoute extends Route {
  // @service intl: IntlService;
  @service session;
  @service store;

  async beforeModel(transition) {
    await this.session.setup();
    // this.intl.setLocale('pl-PL');
    this.session.requireAuthentication(transition, 'admin.login');
  }
  model(params) {
    // console.log(this.store.findAll('employee'));
    return this.store.findRecord('employee', params.id);
  }
}
