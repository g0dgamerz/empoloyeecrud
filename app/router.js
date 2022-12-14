import EmberRouter from '@ember/routing/router';
import config from 'employee/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  // this.route('authenticated', { path: '' }, function () {
  // });
  this.route('employeedetails', { path: '/employee/:id/edit' });
  this.route('create', { path: '/employee/create' });
  this.route('not-found', { path: '/*path' });
  // this.route('index');
});
