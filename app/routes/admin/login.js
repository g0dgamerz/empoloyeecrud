import Route from '@ember/routing/route';
import { action } from '@ember/object';

// import { inject as service } from '@ember/service';

// eslint-disable-next-line ember/no-classic-classes
export default Route.extend({
  model: function () {
    return Object.create({ username: '', password: '' });
  },
  setupController: function (controller, model) {
    controller.set('credentials', model);
  },
  authenticate: action(function (credentials) {
    console.log(credentials);
  }),
});

// export default class AdminLoginRoute extends Route {
//   // @service session;
//   // beforeModel() {
//   //   this.session.prohibitAuthentication('index');
//   // }
// }
