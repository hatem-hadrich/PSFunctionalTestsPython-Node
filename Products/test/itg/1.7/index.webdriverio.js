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
    require('./scenario/BO/add_standard_product.webdriverio.js');
    // require('./scenario/FO/check_product.webdriverio');
    //
    // //create an order in FO and check it in BO
    // require('./scenario/FO/buy_product.webdriverio');
    // require('./scenario/BO/check_order.webdriverio');
    //
    // //create an account in FO
    // require('./scenario/FO/create_account.webdriverio');


});
