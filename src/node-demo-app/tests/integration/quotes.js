var request = require('supertest'),
    app = require(__dirname + '/../../main');

describe('Quotes', function () {
    describe('GET /quote/4', function () {
        it('should response with 404', function (done) {
            request(app)
                .get('/quote/4')
                .expect(404, done)
        })
    });

    describe('GET /quote/0', function () {
        it('should response with first 200 code', function (done) {
            request(app)
                .get('/quote/0')
                .expect(200, done)
        })

        it('should response with first quote', function (done) {
            request(app)
                .get('/quote/0')
                .expect(/Audrey Hepburn/, done)
        })
    });

});