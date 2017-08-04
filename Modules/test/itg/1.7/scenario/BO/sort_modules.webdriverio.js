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

    function getName(browser, done) {
        var i = 0;
        browser
            .waitUntil(function() {
                i++;
                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-name').then(function (name) {
                    name_table[i] = name;
                    return i === nb_module;
                });
            }, 100000)
            .call(done);
    }

    function getNameModuleAfterSort(browser, done) {
        var i = 1, j = 1;
        browser
            .waitUntil(function() {
                return browser.getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-name').then(function (name) {
                    nameTableAfterSort[i] = name;
                    i++;
                    return i === nb_module;
                });
            }, 100000)
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function (name) {
                    if(nameTableAfterSort[j] === nameTable[j-1]){
                        return done();
                    }else{
                        return done(new Error("something wrong in the sort by name"));
                    }
                    j++;
                    return j === nb_module;
                });
            }, 100000);
    }

    function getNameSort(browser, done) {
        var i = 0;
        global.nameTable = sortModuleName(name_table);
        browser
            .waitUntil(function() {
                return browser.waitForExist('//*[@id="modules-list-container-all"]').then(function (name) {
                    i++;
                    return i === nb_module;
                });
            }, 100000)
            .call(done);
    }

    function sortModuleName(table) {
        return table.sort();
    }
    describe('sort module', function (done) {

        it('should go to modules page', function (done) {

            this.client
                .pause(5000)
                .click(this.selector.modules_menu)
                .waitForExist(this.selector.modules_page_loaded, 90000)
                .pause(3000)
                .getText('//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/div/div[1]/div/span[1]').then(function (nb) {
                    global.nb_module = parseInt(nb.substring(0, 2));
                })
                .call(done);
        });

        it('should get name', function (done) {
            getName(this.client, done);
        });

        it('should get table name', function (done) {
            getNameSort(this.client, done);
        });

        it('should sort module by name', function (done) {
            this.client
                .waitForExist(this.selector.sort_module, 90000)
                .selectByIndex(this.selector.sort_module, 1)
                .pause(2000)
                .call(done)
        });

        it('should check the position module', function (done) {
            getNameModuleAfterSort(this.client, done)
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