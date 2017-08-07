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

    //Test case n°1 : search module using grid view in BO
    require('./scenario/BO/search_module_in_grid.webdriverio');

    //Test case n°2 : sort modules using grid view in BO
    require('./scenario/BO/sort_modules_in_grid.webdriverio');

    //Test case n°3 : search module using list view in BO
    require('./scenario/BO/search_module_in_list.webdriverio');

    //Test case n°4 : sort modules using list view in BO
    require('./scenario/BO/sort_modules_in_list.webdriverio');

});
