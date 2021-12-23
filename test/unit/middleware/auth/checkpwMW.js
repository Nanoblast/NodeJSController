var expect = require('chai').expect;
var checkpwMW = require('../../../../middleware/auth/checkpwMW');

describe('checkpw middleware', function () {
    it('should return device', function (done){
        const mw = checkpwMW    ({});
        const reqMock = { body: { password : '123'}};
        mw({
            reqMock
        }, {},
         () => {
            expect(reqMock.body).to.be.eql({password : '123'});
            done();
        });
    });
});