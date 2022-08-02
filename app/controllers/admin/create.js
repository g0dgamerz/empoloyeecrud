import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AdminCreateController extends Controller {
  @service router;
  @service store;
  @action createEmployee(event) {
    event.preventDefault();
    console.log(this.employeeName);
    let employee = this.store.createRecord('employee', {
      employeeID: this.employeeID,
      nationalIDNumber: this.nationalIDNumber,
      employeeName: this.employeeName,
      loginID: this.loginID,
      jobTitle: this.jobTitle,
      birthDate: this.birthDate,
      maritalStatus: this.maritalStatus,
      gender: this.gender,
      hireDate: this.hireDate,
      vacationHours: this.vacationHours,
      sickLeaveHours: this.sickLeaveHours,
      rowGuid: this.rowGuid,
      modifiedDate: this.modifiedDate,
    });
    employee.save().then(() => {
      this.router.transitionTo('admin.index', employee.employeeID);
    });
  }
}
