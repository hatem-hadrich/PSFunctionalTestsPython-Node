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

    //create a product in BO and check it in FO
    require('./scenario/BO/create_product.webdriverio');
    require('./scenario/FO/check_product.webdriverio');

});
