var expect = require('chai').expect;
var authMW = require('../../../../middleware/auth/authMW');

describe('auth middleware', function () {
    it('should fail authorization', function (done){
        const mw = authMW({});
        mw({
            session:
            { 
                belepve : 'false'
            }
        }, 
        {
            redirect: (where) => {
                expect(where).to.be.eql('/');
                done();
            }
        }, () => {
            done();
        });
    });
    it('session should not exist', function (done){
        const mw = authMW({});
        mw({
            session:
            { 
            }
        }, 
        {
            redirect: (where) => {
                expect(where).to.be.eql('/');
                done();
            }
        }, () => {
            done();
        });
    });
    it('user should be logged in', function (done){
        const mw = authMW({});
        mw({
            session:
            { 
                belepve: true
            }
        }, 
        {
            redirect: (where) => {
                expect(where).to.be.eql('/');
                done();
            
            }
        }, () => {
            done();
        });
    });
});