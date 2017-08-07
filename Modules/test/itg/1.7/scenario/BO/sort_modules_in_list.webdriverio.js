'use strict';
var should = require('should');
var common = require('../../common.webdriverio');
var globals = require('../../globals.webdriverio.js');

describe('Test case n°4 = Sort modules in list view ', function(){
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

    /****************************Sort modules by name**********************************/
    function getAllModulesName(browser, done) {
        var i = 1;
        browser
            .waitUntil(function() {

                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-name').then(function (name) {
                    name_table[i] = name.toLowerCase();
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .call(done);
    }

    function getAllModulesNameAfterSort(browser, done) {
        var i = 1, j = 1;

        browser
            .waitUntil(function() {
                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-name').then(function (name) {
                    nameTableAfterSort[i] = name.toLowerCase();
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function () {
                    if(nameTableAfterSort[j] === nameTable[j-1]){
                        j++;
                    }else{
                        done(new Error("something wrong in the sort by name"));
                    }
                    return j === nb_module+1;
                });
            }, 100000).call(done);
    }

    function getNameSort(browser, done) {
        var i = 0;
        global.nameTable = sortModuleByName(name_table);
        browser
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function () {
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .call(done);
    }

    function sortModuleByName(table) {
        return table.sort();
    }

    /****************************Sort modules by increasing price**********************************/

    function getAllModulesPrice(browser, done) {
        var i = 1;
        browser
            .waitUntil(function() {

                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-price').then(function (price) {
                    price_table[i] = price;
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .call(done);
    }

    function getAllModulesPriceAfterSort(browser, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-price').then(function (price) {
                    priceTableAfterSort[i] = price;
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function (name) {
                    if(priceTableAfterSort[j] === priceIncreasingTable[j-1]){
                        j++;
                    }else{
                        done(new Error("something wrong in the sort by increasing price"));
                    }
                    return j === nb_module+1;
                });
            }, 100000).call(done);
    }

    function getPriceSort(browser, done) {
        var i = 0;
        global.priceIncreasingTable = sortModuleByIncreasingPrice(price_table);
        browser
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function (name) {
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .call(done);
    }

    function sortModuleByIncreasingPrice(table) {
        return table.sort(function (a, b) {  return a - b; });
    }

    /****************************Sort modules by decreasing price**********************************/

    function getAllModulesPrices(browser, done) {
        var i = 1;
        browser
            .waitUntil(function() {

                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-price').then(function (price) {
                    decreasingPrice_table[i] = price;
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .call(done);
    }

    function getAllModulesPricesAfterSort(browser, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-price').then(function (price) {
                    decreasingPriceTableAfterSort[i] = price;
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function (name) {
                    if(decreasingPriceTableAfterSort[j] === priceDecreasingTable[j]){
                        j++;
                    }else{
                        done(new Error("something wrong in the sort by decreasing price"));
                    }
                    return j === nb_module+1;
                });
            }, 100000).call(done);
    }

    function getPricesSort(browser, done) {
        var i = 0;
        global.priceDecreasingTable = sortModuleByDecreasingPrice(decreasingPrice_table);
        browser
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function () {
                    i++;
                    return i === nb_module+1;
                });
            }, 100000)
            .call(done);
    }

    function sortModuleByDecreasingPrice(table) {
        table.sort(function (a, b) {  return a - b;  });
        return table.reverse();
    }

    describe('should go to modules page', function (done) {

        it('should click on modules menu', function (done) {

            this.client
                .pause(5000)
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .pause(3000)
                .getText('//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/div/div[1]/div/span[1]').then(function (nb) {
                    //global.nb_module = parseInt(nb.substring(0, 3));
                    var numberModule = nb.match(/[0-9]+/g);
                    global.nb_module = parseInt(numberModule[0]);
                })
                .call(done);
        });

        it('should switch the view of modules', function (done) {

            this.client
                .waitForExist(this.selector.view_list, 90000)
                .click(this.selector.view_list)
                .call(done);
        });
    });

    describe('sort module by name ', function (done) {

        it('should get all modules name ', function (done) {
            getAllModulesName(this.client, done);
        });

        it('should sort all modules by name ', function (done) {
            getNameSort(this.client, done);
        });

        it('should select sort module by name ', function (done) {
            this.client
                .waitForExist(this.selector.sort_module, 90000)
                .selectByIndex(this.selector.sort_module, 1)
                .pause(2000)
                .call(done)
        });

        it('should check sort modules by name ', function (done) {
            getAllModulesNameAfterSort(this.client, done);
        });
    });

    describe('sort module by increasing price ', function (done) {

        it('should get all modules price ', function (done) {
            getAllModulesPrice(this.client, done);
        });

        it('should sort all modules by increasing price ', function (done) {
            getPriceSort(this.client, done);
        });

        it('should select sort module by increasing price ', function (done) {
            this.client
                .waitForExist(this.selector.sort_module, 90000)
                .selectByIndex(this.selector.sort_module, 2)
                .pause(2000)
                .call(done)
        });

        it('should check sort modules by increasing price ', function (done) {
            getAllModulesPriceAfterSort(this.client, done);
        });
    });

    describe('sort module by decreasing price ', function (done) {

        it('should get all modules price ', function (done) {
            getAllModulesPrices(this.client, done);
        });

        it('should sort all modules by decreasing price ', function (done) {
            getPricesSort(this.client, done);
        });

        it('should select sort module by decreasing price ', function (done) {
            this.client
                .waitForExist(this.selector.sort_module, 90000)
                .selectByIndex(this.selector.sort_module, 3)
                .pause(2000)
                .call(done)
        });

        it('should check sort modules by decreasing price ', function (done) {
            getAllModulesPricesAfterSort(this.client, done);
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