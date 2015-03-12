var request = require('supertest'),
    app = require(__dirname + '/../../main');

describe('Account', function () {

    describe('GET /account/profile', function () {
        it('should return empty response object', function (done) {
            request(app)
                .get('/account/profile')
                .expect(/\{\}/)
                .expect(200, done)
        });
    });

    describe('GET /account/login', function () {
        it('should return status code 200 and true answer', function (done) {
            request(app)
                .get('/account/login')
                .expect(/true/)
                .expect(200, done)
        });
    });

    describe('GET /account/countViews', function () {
        it('should welcome with session demo', function (done) {
            request(app)
                .get('/account/countViews')
                .expect(/welcome to the session demo. refresh/)
                .expect(200, done)
        });
    });
});