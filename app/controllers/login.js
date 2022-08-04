import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
// import { tracked } from '@glimmer/tracking';

export default class AdminLoginController extends Controller {
  @service router;
  @service session;
  @tracked errorMessage;
  // @tracked username;
  // @tracked password;
  @action
  async login() {
    // let { identification, password } = this;
    try {
      const credentials = {
        userName: this.identification,
        password: this.password,
      };
      await this.session.authenticate('authenticator:token', credentials);
      // const authenticator = 'authenticator:token';
      // console.log(authenticator);
      // await this.session.authenticate(authenticator, credentials);
      // console.log(this.localstorage);
      // this.router.transitionTo('admin.index');
    } catch (error) {
      this.errorMessage = error.error || error;
    }
    if (this.session.isAuthenticated) {
      console.log('you are authenticated');
      this.router.transitionTo('index');
    }
  }

  @action
  updateIdentification(e) {
    this.identification = e.target.value;
  }

  @action
  updatePassword(e) {
    this.password = e.target.value;
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
