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

    //Test case n°1 : create and check a standard product in BO
    require('./scenario/BO/add_standard_product.webdriverio.js');

    //Test case n°2 : create and check a pack product in BO
    // require('./scenario/BO/add_pack_product.webdriverio');


});
