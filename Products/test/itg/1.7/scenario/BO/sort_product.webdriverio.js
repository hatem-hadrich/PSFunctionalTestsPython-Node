'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°1 = Sort products', function(){
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

    describe('sort product by id', function (done) {
        it("should go to the products page", function (done) {
            this.client
                .click(this.selector.products)
                .waitForExist(this.selector.new_product, 120000)
                .call(done);
        });

        it("should click on sort by desc", function (done) {
            this.client
                .waitForExist(this.selector.sort_id_desc, 90000)
                .click(this.selector.sort_id_desc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by desc", function (done) {
            this.client
                .waitForExist(this.selector.product_nb_one, 90000)
                .getAttribute(this.selector.product_nb_one, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(7);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_two, 90000)
                .getAttribute(this.selector.product_nb_two, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(6);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_three, 90000)
                .getAttribute(this.selector.product_nb_three, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(5);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_fore, 90000)
                .getAttribute(this.selector.product_nb_fore, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(4);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_five, 90000)
                .getAttribute(this.selector.product_nb_five, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(3);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_six, 90000)
                .getAttribute(this.selector.product_nb_six, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(2);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_seven, 90000)
                .getAttribute(this.selector.product_nb_seven, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(1);
                })
                .pause(2000)
                .call(done);
        });

        it("should click on sort by asc", function (done) {
            this.client
                .waitForExist(this.selector.sort_id_asc, 90000)
                .click(this.selector.sort_id_asc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by asc", function (done) {
            this.client
                .waitForExist(this.selector.product_nb_one, 90000)
                .getAttribute(this.selector.product_nb_one, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(1);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_two, 90000)
                .getAttribute(this.selector.product_nb_two, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(2);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_three, 90000)
                .getAttribute(this.selector.product_nb_three, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(3);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_fore, 90000)
                .getAttribute(this.selector.product_nb_fore, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(4);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_five, 90000)
                .getAttribute(this.selector.product_nb_five, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(5);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_six, 90000)
                .getAttribute(this.selector.product_nb_six, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(6);
                })
                .pause(2000)
                .waitForExist(this.selector.product_nb_seven, 90000)
                .getAttribute(this.selector.product_nb_seven, 'value').then(function (id) {
                    var product_id = parseInt(id);
                    should(product_id).be.equal(7);
                })
                .pause(2000)
                .call(done);
        });

    });

    describe('sort product by name', function (done) {

        it("should click on sort by desc", function (done) {
            this.client
                .waitForExist(this.selector.sort_name_desc, 90000)
                .click(this.selector.sort_name_desc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by desc", function (done) {
            this.client
                .waitForExist(this.selector.product_name_one, 90000)
                .getText(this.selector.product_name_one).then(function (name) {
                    should(name).be.equal("Printed Summer Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_two, 90000)
                .getText(this.selector.product_name_two).then(function (name) {
                    should(name).be.equal("Printed Summer Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_three, 90000)
                .getText(this.selector.product_name_three).then(function (name) {
                    should(name).be.equal("Printed Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_fore, 90000)
                .getText(this.selector.product_name_fore).then(function (name) {
                    should(name).be.equal("Printed Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_five, 90000)
                .getText(this.selector.product_name_five).then(function (name) {
                    should(name).be.equal("Printed Chiffon Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_six, 90000)
                .getText(this.selector.product_name_six).then(function (name) {
                    should(name).be.equal("Faded Short Sleeves T-shirt");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_seven, 90000)
                .getText(this.selector.product_name_seven).then(function (name) {
                    should(name).be.equal("Blouse");
                })
                .pause(2000)
                .call(done);
        });

        it("should click on sort by asc", function (done) {
            this.client
                .waitForExist(this.selector.sort_name_asc, 90000)
                .click(this.selector.sort_name_asc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by asc", function (done) {
            this.client
                .waitForExist(this.selector.product_name_one, 90000)
                .getText(this.selector.product_name_one).then(function (name) {
                    should(name).be.equal("Blouse");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_two, 90000)
                .getText(this.selector.product_name_two).then(function (name) {
                    should(name).be.equal("Faded Short Sleeves T-shirt");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_three, 90000)
                .getText(this.selector.product_name_three).then(function (name) {
                    should(name).be.equal("Printed Chiffon Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_fore, 90000)
                .getText(this.selector.product_name_fore).then(function (name) {
                    should(name).be.equal("Printed Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_five, 90000)
                .getText(this.selector.product_name_five).then(function (name) {
                    should(name).be.equal("Printed Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_six, 90000)
                .getText(this.selector.product_name_six).then(function (name) {
                    should(name).be.equal("Printed Summer Dress");
                })
                .pause(2000)
                .waitForExist(this.selector.product_name_seven, 90000)
                .getText(this.selector.product_name_seven).then(function (name) {
                    should(name).be.equal("Printed Summer Dress");
                })
                .pause(2000)
                .call(done);
        });

    });

    describe('sort product by reference', function (done) {

        it("should click on sort by desc", function (done) {
            this.client
                .waitForExist(this.selector.sort_reference_desc, 90000)
                .click(this.selector.sort_reference_desc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by desc", function (done) {
            this.client
                .waitForExist(this.selector.product_reference_one, 90000)
                .getText(this.selector.product_reference_one).then(function (reference) {
                    should(reference).be.equal("demo_7");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_two, 90000)
                .getText(this.selector.product_reference_two).then(function (reference) {
                    should(reference).be.equal("demo_6");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_three, 90000)
                .getText(this.selector.product_reference_three).then(function (reference) {
                    should(reference).be.equal("demo_5");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_fore, 90000)
                .getText(this.selector.product_reference_fore).then(function (reference) {
                    should(reference).be.equal("demo_4");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_five, 90000)
                .getText(this.selector.product_reference_five).then(function (reference) {
                    should(reference).be.equal("demo_3");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_six, 90000)
                .getText(this.selector.product_reference_six).then(function (reference) {
                    should(reference).be.equal("demo_2");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_seven, 90000)
                .getText(this.selector.product_reference_seven).then(function (reference) {
                    should(reference).be.equal("demo_1");
                })
                .pause(2000)
                .call(done);
        });

        it("should click on sort by asc", function (done) {
            this.client
                .waitForExist(this.selector.sort_reference_asc, 90000)
                .click(this.selector.sort_reference_asc)
                .pause(2000)
                .call(done)
        });

        it("should check the products sorted by asc", function (done) {
            this.client
                .waitForExist(this.selector.product_reference_one, 90000)
                .getText(this.selector.product_reference_one).then(function (reference) {
                    should(reference).be.equal("demo_1");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_two, 90000)
                .getText(this.selector.product_reference_two).then(function (reference) {
                    should(reference).be.equal("demo_2");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_three, 90000)
                .getText(this.selector.product_reference_three).then(function (reference) {
                    should(reference).be.equal("demo_3");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_fore, 90000)
                .getText(this.selector.product_reference_fore).then(function (reference) {
                    should(reference).be.equal("demo_4");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_five, 90000)
                .getText(this.selector.product_reference_five).then(function (reference) {
                    should(reference).be.equal("demo_5");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_six, 90000)
                .getText(this.selector.product_reference_six).then(function (reference) {
                    should(reference).be.equal("demo_6");
                })
                .pause(2000)
                .waitForExist(this.selector.product_reference_seven, 90000)
                .getText(this.selector.product_reference_seven).then(function (reference) {
                    should(reference).be.equal("demo_7");
                })
                .pause(2000)
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