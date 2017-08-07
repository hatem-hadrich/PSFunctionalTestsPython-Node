'use strict';
var should = require('should');
var common = require('./common.webdriverio');


describe('Allscenario', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.client = common.getClient();
        this.client.call(done);
    });

    after(function (done) {
        this.client
            .end()
            .call(done);
    });

    //Test case n°1 : add customer in BO
    require('./scenario/BO/add_employee.webdriverio');

    //Test case n°2 : delete customer in BO
    require('./scenario/BO/delete_employee.webdriverio');

});
