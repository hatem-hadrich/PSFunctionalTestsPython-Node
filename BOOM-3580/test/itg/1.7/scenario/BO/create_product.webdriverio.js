'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');
var path = require('path');
var toUpload = path.join(__dirname, '../..', 'datas', 'image_test.jpg');
var devMode = false;
var exit_welcome = false;


describe('The Product Creation', function () {
    common.initMocha.call(this);

    before(function (done) {
        this.selector = globals.selector;
        this.client.call(done);
    });
    process.on('uncaughtException', common.take_screenshot);
    process.on('ReferenceError', common.take_screenshot);
    after(common.after);

    describe('Log in in Back Office', function (done) {
        it('should log in successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signinBO()
                .isVisible(this.selector.exit_welcome).then(function (isVisible) {
                exit_welcome = isVisible;
            })
                .waitForExist(this.selector.menu, 90000)
                .call(done);
        });
    });

    // describe('Edit price display method', function (done) {
    //     it('should go to customers settings > Group', function (done) {
    //         global.fctname = this.test.title;
    //         if (exit_welcome) {
    //             this.client
    //                 .waitForExist(this.selector.exit_welcome, 90000)
    //                 .click(this.selector.exit_welcome);
    //         }
    //         this.client
    //             .waitForExist(this.selector.shop_parameters_maintab, 90000)
    //             .moveToObject(this.selector.shop_parameters_maintab)
    //             .waitForExist(this.selector.customer_settings_subtab, 90000)
    //             .click(this.selector.customer_settings_subtab)
    //             .waitForExist(this.selector.group_tab, 90000)
    //             .click(this.selector.group_tab)
    //             .call(done);
    //     });
    //     it('should click on edit visitor', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.edit_visitor_button, 90000)
    //             .click(this.selector.edit_visitor_button)
    //             .pause(3000)
    //             .call(done);
    //     });
    //     it('should select tax excluded in Price display method', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.price_display_method_select, 90000)
    //             .selectByValue(this.selector.price_display_method_select, 1)
    //             .pause(3000)
    //             .call(done);
    //     });
    //     it('should click on save button', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.edit_visitor_save_button, 90000)
    //             .moveToObject(this.selector.edit_visitor_save_button)
    //             .click(this.selector.edit_visitor_save_button)
    //             .call(done);
    //     });
    // });
    //
    // describe('Add new tax rules', function (done) {
    //     it('should go to international > Taxes', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.international_maintab, 90000)
    //             .moveToObject(this.selector.international_maintab)
    //             .waitForExist(this.selector.taxes_subtab, 90000)
    //             .click(this.selector.taxes_subtab)
    //             .pause(3000)
    //             .call(done);
    //     });
    //     it('should go to taxe rule', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.taxes_rules_tab, 90000)
    //             .click(this.selector.taxes_rules_tab)
    //             .pause(3000)
    //             .call(done);
    //     });
    //     it('should click on add new tax rule button', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.add_new_tax_rule_button, 90000)
    //             .click(this.selector.add_new_tax_rule_button)
    //             .pause(3000)
    //             .call(done);
    //     });
    //     it('should enter the name of tax rule', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.name_tax_rule_input, 90000)
    //             .setValue(this.selector.name_tax_rule_input, "VAT (23%)")
    //             .pause(3000)
    //             .call(done);
    //     });
    //     it('should click on enable tax rule', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.enable_tax_rule_toggle, 90000)
    //             .click(this.selector.enable_tax_rule_toggle)
    //             .call(done);
    //     });
    //     it('should click on save and stay button', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.save_and_stay_tax_rule_button, 90000)
    //             .click(this.selector.save_and_stay_tax_rule_button)
    //             .call(done);
    //     });
    //     it('should select tax', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.tax_select, 90000)
    //             .selectByValue(this.selector.tax_select, 19)
    //             .call(done);
    //     });
    //     it('should click on save and stay button', function (done) {
    //         global.fctname = this.test.title;
    //         this.client
    //             .waitForExist(this.selector.save_and_stay_new_tax_rule_button, 90000)
    //             .click(this.selector.save_and_stay_new_tax_rule_button)
    //             .call(done);
    //     });
    // });

    describe('Create new product', function (done) {
        it("should click on add new product button", function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.menu, 90000)
                .click(this.selector.products)
                .waitForExist(this.selector.new_product, 90000)
                .waitForExist('#notifications-total', 90000)
                .isVisible('//div[@id="debug-mode"]').then(function (isVisible) {
                devMode = isVisible;
            })
                .call(done);
        });

        it('should choose dev mode', function (done) {
            global.fctname = this.test.title;
            if (devMode) {
                this.client
                    .waitForExist('//a[@class="hide-button"]', 90000)
                    .click('//a[@class="hide-button"]');
            }
            this.client.call(done);
        });

        it('should enter the name of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.new_product)
                .waitForExist(this.selector.product_name, 90000)
                .setValue(this.selector.product_name, 'test_nodejs_' + product_id)
                .call(done);
        });

        it('should enter the quantity of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.quantity_shortcut, 90000)
                .clearElement(this.selector.quantity_shortcut)
                .addValue(this.selector.quantity_shortcut, qte)
                .call(done);
        });

        it('should enter the price of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.priceTE_shortcut, 90000)
                .execute(function () {
                    document.querySelector('#form_step1_price_shortcut').value = "";
                })
                .setValue(this.selector.priceTE_shortcut, priceTE)
                .call(done);
        });

        it('should select tax rule of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.product_tax_rule_select, 90000)
                .click(this.selector.product_tax_rule_select)
                .pause(3000)
                .waitForExist(this.selector.product_tax_rule_option, 90000)
                .click(this.selector.product_tax_rule_option)
                .pause(3000)
                .getValue(this.selector.product_price_ttc_shortcut_input).then(function (price_value) {
                global.tax_included_price = price_value;
                should(price_value).be.equal('12.3');
            })
                .call(done);
        });

        it('should enter the summary of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist('textarea#form_step1_description_short_1', 90000)
                .execute(function () {
                    document.querySelector('textarea#form_step1_description_short_1').style = "";
                })
                .setValue('textarea#form_step1_description_short_1', "this the summary")
                .call(done);
        });

        it('should enter the description of product', function (done) {
            global.fctname = this.test.title;
            this.client
                .click(this.selector.description_button)
                .waitForExist('textarea#form_step1_description_1', 90000)
                .execute(function () {
                    document.querySelector('textarea#form_step1_description_1').style = "";
                })
                .setValue('textarea#form_step1_description_1', "this the description")
                .call(done);
        });

        it('should close toolbar', function (done) {
            global.fctname = this.test.title;
            if (devMode) {
                this.client
                    .waitForExist('//a[@class="hide-button"]', 90000)
                    .click('//a[@class="hide-button"]');
            }
            this.client.call(done);
        });

        it('should select product online', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(1000)
                .click(this.selector.product_online)
                .call(done);
        });

        it('should save product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.save_product, 90000)
                .click(this.selector.save_product)
                .call(done);
        });
        it('should close green validation', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.close_validation, 90000)
                .click(this.selector.close_validation)
                .call(done);
        });
    });
    describe('Add two specific prices', function (done) {
        it('should go to the pricing', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.product_pricing_tab, 90000)
                .click(this.selector.product_pricing_tab)
                .pause(3000)
                .call(done);
        });

        it('should click on add specific price button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.add_specific_price_button, 90000)
                .click(this.selector.add_specific_price_button)
                .pause(3000)
                .call(done);
        });

        it('should select the condition for', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_for_users_select, 90000)
                .click(this.selector.specific_price_condition_for_users_select)
                .waitForExist(this.selector.specific_price_condition_for_users_option, 90000)
                .click(this.selector.specific_price_condition_for_users_option)
                .call(done);
        });

        it('should enter the condition quantity', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_quantity_input, 90000)
                .click(this.selector.specific_price_condition_quantity_input)
                .execute(function () {
                    document.querySelector('input#form_step2_specific_price_sp_from_quantity').value = "";
                })
                .setValue(this.selector.specific_price_condition_quantity_input, quantity1)
                .call(done);
        });

        it('should enter the condition product price', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.specific_price_condition_TE_checkbox, 90000)
                .click(this.selector.specific_price_condition_TE_checkbox)
                .execute(function () {
                    document.querySelector('input#form_step2_specific_price_sp_price').value = "";
                })
                .setValue(this.selector.specific_price_condition_TE_input, price1)
                .call(done);
        });

        it('should select the condition tax', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_tax_select, 90000)
                .click(this.selector.specific_price_condition_tax_select)
                .waitForExist(this.selector.specific_price_condition_tax_option, 90000)
                .click(this.selector.specific_price_condition_tax_option)
                .call(done);
        });

        it('should click on apply button', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.specific_price_condition_apply_button, 90000)
                .click(this.selector.specific_price_condition_apply_button)
                .call(done);
        });

        it('should click on add specific price button', function (done) {
            global.fctname = this.test.title;
            this.client
                .pause(5000)
                .waitForExist(this.selector.add_specific_price_button, 90000)
                .click(this.selector.add_specific_price_button)
                .pause(5000)
                .call(done);
        });

        it('should select the condition for', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_for_users_select, 90000)
                .click(this.selector.specific_price_condition_for_users_select)
                .waitForExist(this.selector.specific_price_condition_for_users_option, 90000)
                .click(this.selector.specific_price_condition_for_users_option)
                .call(done);
        });

        it('should enter the condition quantity', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_quantity_input, 90000)
                .click(this.selector.specific_price_condition_quantity_input)
                .execute(function () {
                    document.querySelector('input#form_step2_specific_price_sp_from_quantity').value = "";
                })
                .setValue(this.selector.specific_price_condition_quantity_input, quantity2)
                .call(done);
        });

        it('should enter the condition product price', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_TE_checkbox, 90000)
                .click(this.selector.specific_price_condition_TE_checkbox)
                .execute(function () {
                    document.querySelector('input#form_step2_specific_price_sp_price').value = "";
                })
                .setValue(this.selector.specific_price_condition_TE_input, price2)
                .call(done);
        });

        it('should select the condition tax', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_tax_select, 90000)
                .click(this.selector.specific_price_condition_tax_select)
                .waitForExist(this.selector.specific_price_condition_tax_option, 90000)
                .click(this.selector.specific_price_condition_tax_option)
                .call(done);
        });

        it('should click on apply button', function (done) {
            global.fctname = this.test.title;
            this.client
                .scroll(0, 900)
                .waitForExist(this.selector.specific_price_condition_apply_button, 90000)
                .click(this.selector.specific_price_condition_apply_button)
                .call(done);
        });

        it('should save product', function (done) {
            global.fctname = this.test.title;
            this.client
                .waitForExist(this.selector.save_product, 90000)
                .click(this.selector.save_product)
                .call(done);
        });
    });

    describe('Log out in Back Office', function (done) {
        it('should log out successfully in BO', function (done) {
            global.fctname = this.test.title;
            this.client
                .signoutBO2()
                .call(done);
        });
    });
});