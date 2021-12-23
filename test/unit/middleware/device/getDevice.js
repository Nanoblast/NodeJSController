var expect = require('chai').expect;
var getDevice = require('../../../../middleware/device/getDevice');

describe('getDevice middleware', function () {
    it('should return device', function (done){
        const mw = getDevice({
            DeviceModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '25'});
                    cb(null, 'mock');

                }
            }
        });
        const resMock = { locals: {}};
        mw({
            params: {
                'deviceid' : '25'
            }
        }, resMock,
         (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({ devices: 'mock'});
            done();
        });
    });
    it('should return error', function (done){
        const mw = getDevice({
            DeviceModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '25'});
                    cb('dberr', null);

                }
            }
        });
        const resMock = { locals: {}};
        mw({
            params: {
                'deviceid' : '25'
            }
        },
        resMock,
         (err) => {
            expect(err).to.be.eql('dberr');
            done();
        });
    });
    it('should call when nothing is in the db', function (done){
        const mw = getDevice({
            DeviceModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({_id: '25'});
                    cb(undefined, null);

                }
            }
        });
        const resMock = { locals: {}};
        mw({
            params: {
                'deviceid' : '25'
            }
        },
        resMock,
         (err) => {
            expect(err).to.be.eql(undefined);
            expect(resMock.locals).to.be.eql({});
            done();
        });
    });
    
});