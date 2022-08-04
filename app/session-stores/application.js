import AdaptiveStore from 'ember-simple-auth/session-stores/adaptive';

export default class ApplicationSessionStore extends AdaptiveStore {
  cookieName = 'my-apps-session-cookie';
}
