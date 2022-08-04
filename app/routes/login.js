import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
// import { action } from '@ember/object';

export default class LoginRoute extends Route {
  @service session;

  beforeModel() {
    this.session.prohibitAuthentication('index');
  }
}

// import { inject as service } from '@ember/service';

// eslint-disable-next-line ember/no-classic-classes
// export default Route.extend({
//   model: function () {
//     return Object.create({ username: '', password: '' });
//   },
//   setupController: function (controller, model) {
//     controller.set('credentials', model);
//   },
//   authenticate: action(function (credentials) {
//     console.log(credentials);
//   }),
// });

// export default class AdminLoginRoute extends Route {
//   // @service session;
//   // beforeModel() {
//prohibitAuthentication is opposite of require authentication
// use to rediret to another route if session is authenticated
//   //   this.session.prohibitAuthentication('index');
//   // }
// }
