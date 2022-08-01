import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminEmployeedetailsController extends Controller {
  @service store;
  @service router;
  @action editEmployee(event) {
    event.preventDefault();
    let employee = this.model;
    console.log('test');
    console.log(employee);
    employee.save().then(() => {
      this.router.transitionTo('admin.index');
    });
  }
}
