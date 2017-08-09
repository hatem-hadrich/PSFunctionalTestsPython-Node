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

    /*****************************************************************************************************************************/
    /***********************************************Get all module after search***************************************************/
    /*****************************************SEARCH MODULE NAME : contact form***************************************************/
    /**SEARCH IN : {data-name, data-author, data-description, data-tech-name, data-child-categories, data-categories, data-type}**/
    /*****************************************************************************************************************************/

    function getAllModulesInformations(browser, done) {
        var i = 0;
        browser
            .waitUntil(function() {
                i++;check_module[i] = [];
                return browser
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-name').then(function (name) {
                                name_table[i] = name.toLowerCase();
                                if(name_table[i].includes("contact") || name_table[i].includes("form") ) check_module[i][1] = true; else check_module[i][1] = false;
                                //console.log(check_module[i][1]);
                                return i === nbr;
                            })
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-author').then(function (author) {
                                author_table[i] = author.toLowerCase();
                                if(author_table[i].includes("contact") || author_table[i].includes("form")) check_module[i][2] = true; else check_module[i][2] = false;
                                //console.log(check_module[i][2]);
                                return i === nbr;
                            })
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-description').then(function (description) {
                                description_table[i] = description.toLowerCase();
                                if(description_table[i].includes("contact") || description_table[i].includes("form")) check_module[i][3] = true; else check_module[i][3] = false;
                                //console.log(check_module[i][3]);
                                return i === nbr;
                            })
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-tech-name').then(function (tech_name) {
                                tech_name_table[i] = tech_name.toLowerCase();
                                if(tech_name_table[i].includes("contact") || tech_name_table[i].includes("form")) check_module[i][4] = true; else check_module[i][4] = false;
                                //console.log(check_module[i][4]);
                                return i === nbr;
                            })
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-child-categories').then(function (child_categorie) {
                                child_categories_table[i] = child_categorie.toLowerCase();
                                if(child_categories_table[i].includes("contact") || child_categories_table[i].includes("form")) check_module[i][5] = true; else check_module[i][5] = false;
                                //console.log(check_module[i][5]);
                                return i === nbr;
                            })
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-categories').then(function (categorie) {
                                categories_table[i] = categorie.toLowerCase();
                                if(categories_table[i].includes("contact") || categories_table[i].includes("form")) check_module[i][6] = true; else check_module[i][6] = false;
                                //console.log(check_module[i][6]);
                                return i === nbr;
                            })
                            .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-type').then(function (type) {
                                type_table[i] = type.toLowerCase();
                                if(type_table[i].includes("contact") || type_table[i].includes("form")) check_module[i][7] = true; else check_module[i][7] = false;
                                //console.log(check_module[i][7]);
                                //console.log("*************************************************");
                                return i === nbr;
                            })
            }, 10000)
            .call(done);
    }

    function checkAllModulesInformations(browser, done) {
        var i = 0, j = 0;
        browser
            .waitUntil(function() {
                i++;
                return browser
                    .getAttribute('//*[@id="modules-list-container-all"]/div['+i+']', 'data-name').then(function () {
                        if(check_module[i][1] === true||
                            check_module[i][2]  === true || check_module[i][3]  === true ||
                            check_module[i][4]  === true || check_module[i][5]  === true ||
                            check_module[i][6]  === true || check_module[i][7]  === true){
                            j++;
                            global.nb_module_after_search = j;
                        }
                        return i === nbr;
                    })

            }, 10000)
            .waitUntil(function() {
                if(nb_module_after_search == nbr){
                    done();
                }
                else{
                    done(new Error("something wrong in the search of modules"));
                }
            }, 10000)
            .call(done);
    }
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
                    global.nbr = parseInt(text.match(/[0-9]+/g)[0]);
                    if (global.nbr == 0) {
                        done(new Error('The module you are searching for does not exist!'));
                    }
                    else
                        done();
                })
        });

        it('should get all modules informations', function (done) {
            getAllModulesInformations(this.client, done);
        });

        it('should check the result search of modules', function (done) {
            checkAllModulesInformations(this.client,done);
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