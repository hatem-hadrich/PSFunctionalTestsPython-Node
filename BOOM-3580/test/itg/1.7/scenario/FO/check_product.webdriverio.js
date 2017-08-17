'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('The Check of the Product in Front Office', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Open the shop', function (done) {
        it('should acces to the Front Office', function (done) {
            global.fctname = this.test.title;
            this.client
                .url('http://' + URL + '/en/')
                .call(done);
        });
    });

    describe('Check the product', function (done) {
        it('should search for the product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.search_product, 90000)
                .setValue(this.selector.search_product, 'test_nodejs_' + product_id)
                .click(this.selector.search_product_button)
                .call(done);
        });

        it('should check the product name and price', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.search_product_result_name, 90000)
                .getText(this.selector.search_product_result_name).then(function (text) {
                var my_name = text;
                should(my_name.toLowerCase()).be.equal('test_nodejs_' + product_id);
            })
                .getText(this.selector.search_product_result_price).then(function (text) {
                var my_price = text;
                should(my_price).be.equal("€10.00");
            })
                .click(this.selector.product_name_img)
                .call(done);
        });
    });
    describe('Check the calculation price', function (done) {


        it('should check the quantity', function (done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.product_discounts_table + '/tr[1]', 'data-discount-quantity').then(function (quantity) {
                should(parseInt(quantity)).be.equal(quantity1);
            })
                .pause(3000)
                .getAttribute(this.selector.product_discounts_table + '/tr[2]', 'data-discount-quantity').then(function (quantity) {
                should(parseInt(quantity)).be.equal(quantity2);
            })
                .call(done);
        });

        it('should check the discount', function (done) {
            global.fctname = this.test.title;
            this.client
                .getAttribute(this.selector.product_discounts_table + '/tr[1]', 'data-discount').then(function (discount) {
                var discount_price = priceTE - price1;
                should(parseFloat(discount)).be.equal(discount_price);
            })
                .getAttribute(this.selector.product_discounts_table + '/tr[2]', 'data-discount').then(function (discount) {
                var discount_price = priceTE - price2;
                should(parseFloat(discount)).be.equal(discount_price);
            })
                .call(done);
        });

        it('should check the save price', function (done) {
            global.fctname = this.test.title;
            this.client
                .getText(this.selector.product_discounts_table + '/tr[1]/td[3]').then(function (save_price) {
                var save = parseFloat(quantity1 * (priceTE - price1)).toFixed(2);
                should(save_price).be.equal('Up to €' + save);
            })
                .getText(this.selector.product_discounts_table + '/tr[2]/td[3]').then(function (save_price) {
                var save = parseFloat(quantity2 * (priceTE - price2)).toFixed(2);
                should(save_price).be.equal('Up to €' + save);
            })
                .call(done);
        });
    })
});