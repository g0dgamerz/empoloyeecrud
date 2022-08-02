import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  restore(data) {
    console.log(data);
  },
  async authenticate(username, password) {
    console.log('test');
    console.log(JSON.stringify(username, password));
    let response = await fetch('https://localhost:7108/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(username, password),
    });
    if (response.ok) {
      console.log('token');
      console.log('Bearer' + response.JSON());
      return 'Bearer' + response;
    } else {
      let error = await response.text();
      throw new Error(error);
    }
  },
  invalidate(data) {
    console.log(data);
  },
});
