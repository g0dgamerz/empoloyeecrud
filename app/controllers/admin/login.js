import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import { tracked } from '@glimmer/tracking';

export default class AdminLoginController extends Controller {
  @service session;
  @tracked error;
  @tracked username;
  @tracked password;
  @action
  async login() {
    try {
      const credentials = { userName: this.username, password: this.password };
      const authenticator = 'authenticator:token';
      console.log(authenticator);
      await this.session.authenticate(authenticator, credentials);
    } catch (error) {
      this.error = error;
    }
  }

  @action
  update(attr, event) {
    this[attr] = event.target.value;
  }
  // @action login() {
  //   console.log(this.username, this.password);
  // }
  // @service session;
  // @tracked error;
  // @tracked username;
  // @tracked password;
  // @action
  // async login(event) {
  //   event.preventDefault();
  //   try {
  //     await this.session.authenticate(
  //       'authenticator:token',
  //       this.username,
  //       this.password
  //     );
  //   } catch (error) {
  //     this.error = error;
  //   }
  // }
}
