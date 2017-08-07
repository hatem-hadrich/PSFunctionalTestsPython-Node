'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°1 = Search module in grid view ', function(){
    common.initMocha.call(this);

    before(function(done){
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function(done){
        it('should log in successfully in BO', function(done){
            this.client
                .signinBO()
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });


    describe('search module', function (done) {

        it('should go to modules page', function (done) {
            this.client
                .pause(5000)
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .pause(3000)
                .call(done);
        });

        it('should go to the module', function (done) {
            this.client
                .waitForExist(this.selector.modules_search, 90000)
                .setValue(this.selector.modules_search, module_tech_name)
                .click(this.selector.modules_search_button)
                .getText(this.selector.nbr_module).then(function (text) {
                    global.nbr = parseInt(text[0]);
                    if (global.nbr == 0) {
                        done(new Error('The module you are searching for does not exist!'));
                    }
                    else
                        done();
                })
        });

        it('should check the name of module', function (done) {
            this.client
                .waitForExist('//*[@id="modules-list-container-all"]/div[1]', 90000)
                .getAttribute('//*[@id="modules-list-container-all"]/div[1]', 'data-name').then(function (data_name) {
                    should(data_name).be.equal('Contact form');
                })
                .getAttribute('//*[@id="modules-list-container-all"]/div[1]', 'data-tech-name').then(function (data_tech_name) {
                    should(data_tech_name).be.equal(module_tech_name);
                })
                .call(done);
        });


    });

    describe('Log out in Back Office', function(done){
        it('should log out successfully in BO', function(done){
            this.client
                .signoutBO()
                .call(done);
        });
    });
});