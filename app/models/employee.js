import Model, { attr } from '@ember-data/model';

export default class EmployeeModel extends Model {
  @attr('number') employeeid;
  @attr('string') nationalIdNumber;
  @attr('string') employeeName;
  @attr('string') loginId;
  @attr('string') jobTitle;
  @attr('string') birthday;
  @attr('string') maritalStatus;
  @attr('string') gender;
  @attr('date') hiredate;
  @attr('number') vaccationHours;
  @attr('number') sickLeaveHours;
  @attr('string') rowguid;
  @attr('date') modifiedDate;
}
