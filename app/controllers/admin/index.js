import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminIndexController extends Controller {
  @action deleteEmployee(emp) {
    let confirmed = window.confirm(
      'Are you sure you want to delete this blog?'
    );
    if (confirmed) {
      emp.destroyRecord();
    }
  }
}
