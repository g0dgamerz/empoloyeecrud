import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('number') employeeID;
  @attr('string') nationalIDNumber;
  @attr('string') employeeName;
  @attr('string') loginId;
  @attr('string') jobTitle;
  @attr('string') birthDate;
  @attr('string') maritalStatus;
  @attr('string') gender;
  @attr('date') hireDate;
  @attr('number') vacationHours;
  @attr('number') sickLeaveHours;
  @attr('string') rowguid;
  @attr('date') modifiedDate;
}
