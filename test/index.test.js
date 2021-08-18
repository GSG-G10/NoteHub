const supertest = require('supertest');
const connection = require('../src/database/config/connection');
const app = require('../src/server');
const { dbBuild } = require('../src/database/config/build');
const { getDataDB, postDataDB } = require('../src/database/queries');

test('Testing for / endpoint and get status 200', (done) => {
  supertest(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});

test('Testing for /showNotes endpoint and get status 200', (done) => {
  supertest(app)
    .get('/showNotes')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) done(err);
      expect(res.statusCode).toBe(200);
      expect(res.ok).toEqual(true);
      done();
    });
});

test('Testing for 404 endpoint and get status 404', (done) => {
  supertest(app)
    .get('/shewnote')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) done(err);
      expect(res.ok).toEqual(false);
      done();
    });
});

beforeEach(() => dbBuild());

test('Test get Data', () => getDataDB().then(({ rowCount }) => expect(rowCount).toBe(5)));

test('Test post Data', () => postDataDB('football', 'This is time for sport', 1).then((res) => {
  expect(res.rowCount).toBe(1);
}));

afterAll(() => connection.end());
