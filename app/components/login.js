/* eslint-disable ember/closure-actions */
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default Component.extend({
  submit: action(function () {
    this.sendAction('action', this.credentials);
  }),
});
