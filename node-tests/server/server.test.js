const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world response', (done) => {
  request(app)
  .get('/')
  .expect(404)
  .expect((res) => {
    expect(res.body).toInclude({
      error: 'Page not found'
    });
  })
  .end(done);
});

it('should return the users array', (done) => {
  request(app)
  .get('/users')
  .expect(200)
  .expect((res) => {
    expect(res.body).toInclude({
      name: 'Chris',
      age: 31
    });
  })
  .end(done);
});

// create express route and test so that it works. http get route, /users that returns an array of users with send method. each obj is user. give them a name and age property. assert status == 200, make sure YOU exist in users array
