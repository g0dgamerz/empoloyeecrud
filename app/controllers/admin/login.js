import Controller from '@ember/controller';
import { inject as service } from '@ember.service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminLoginController extends Controller {
  @service session;
  @tracked error;
  @tracked username;
  @tracked password;

  @action
  async login(event) {
    event.preventDefault();
    try {
      await this.session.authenticate(
        'authenticator:token',
        this.username,
        this.password
      );
    } catch (error) {
      this.error = error;
    }
  }
}
