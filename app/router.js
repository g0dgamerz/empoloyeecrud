import EmberRouter from '@ember/routing/router';
import config from 'employee/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('admin', function () {
    this.route('login');
    this.route('employee', { path: '/employee/:id' });
  });
});
