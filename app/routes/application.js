import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class Application extends Route {
  @service session;
  // @service intl;

  async beforeModel() {
    await this.session.setup();
    // this.intl.setLocale('pl-PL');
  }
}
