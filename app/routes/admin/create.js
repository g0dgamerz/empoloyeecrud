import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AdminCreateRoute extends Route {
  @service session;
  async beforeModel(transition) {
    await this.session.setup();
    this.session.requireAuthentication(transition, 'admin.login');
  }
}
