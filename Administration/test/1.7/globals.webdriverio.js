'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.browser = argv.browser;
global.module_tech_name = argv.MODULE;
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';

module.exports = {
    selector: {
        //Installation
        language: '//*[@id="langList"]',
        next_step: '//*[@id="btNext"]',
        agree_checkbox: '//*[@id="set_license"]',
        test_result_compatibility: '//*[@id="sheet_"]/h3',
        shop_name: '//*[@id="infosShop"]',
        country_fo: '//*[@id="infosCountry_chosen"]',
        country_france: '//*[@id="infosCountry_chosen"]/div/ul/li[2]',
        first_name: '//*[@id="infosFirstname"]',
        last_name: '//*[@id="infosName"]',
        email_address: '//*[@id="infosEmail"]',
        shop_password: '//*[@id="infosPassword"]',
        retype_password: '//*[@id="infosPasswordRepeat"]',
        database_address: '//*[@id="dbServer"]',
        database_name: '//*[@id="dbName"]',
        database_login: '//*[@id="dbLogin"]',
        database_password: '//*[@id="dbPassword"]',
        database_server_address: '//*[@id="dbServer"]',
        test_conection: '#btTestDB',
        dbResultCheck: '//*[@id="dbResultCheck"]',
        step_success: '[class:"class="process_step success"]',
        create_file_parameter_step: '//li[@id="process_step_generateSettingsFile" and @class="process_step success"]',
        create_database_step: '//li[@id="process_step_installDatabase" and @class="process_step success"]',
        create_default_shop_step: '//li[@id="process_step_installDefaultData" and @class="process_step success"]',
        create_database_table_step: '//li[@id="process_step_populateDatabase" and @class="process_step success"]',
        create_shop_informations_step: '//li[@id="process_step_configureShop" and @class="process_step success"]',
        create_demonstration_data_step: '//li[@id="process_step_installFixtures" and @class="process_step success"]',
        install_module_step: '//li[@id="process_step_installModules" and @class="process_step success"]',
        install_addons_modules_step: '//li[@id="process_step_installModulesAddons" and @class="process_step success"]',
        install_theme_step: '//li[@id="process_step_installTheme" and @class="process_step success"]',
        finish_step: '//*[@id="install_process_success"]/div[1]/h2',


        //BO
        login: '#email',
        password: '#passwd',
        login_btn: '[name="submitLogin"]',
        exit_welcome: '[class="btn btn-tertiary-outline btn-lg onboarding-button-shut-down"]',
        click_outside_customer: '//*[@id="form-employee"]/div/div[1]/span[1]',
        profil: '#employee_infos',
        new_profil: '.employee-dropdown.dropdown > div',
        logout: '#header_logout',
        customers: '#subtab-AdminParentCustomer',
        dashboard: '#tab-AdminDashboard',
        advanced_parameters: '#subtab-AdminAdvancedParameters',
        team: '#subtab-AdminParentEmployees',
        menu: '#nav-sidebar',

        add_new_employee_button: '//*[@id="page-header-desc-employee-new_employee"]',
        employee_first_name: '//*[@id="firstname"]',
        employee_last_name: '//*[@id="lastname"]',
        employee_email: '//*[@id="email"]',
        employee_passwd: '//*[@id="passwd"]',
        employee_subscribe_newsletter: '//*[@id="fieldset_0"]/div[2]/div[6]/div/span/label[2]',
        employee_profile_select: '//*[@id="id_profile"]',
        employee_save_button: '//*[@id="employee_form_submit_btn"]',
        employees_firstname: '//*[@id="form-employee"]/div/div[2]/table/tbody/tr[2]/td[3]',
        employees_lastname: '//*[@id="form-employee"]/div/div[2]/table/tbody/tr[2]/td[4]',
        employees_email: '//*[@id="form-employee"]/div/div[2]/table/tbody/tr[2]/td[5]',


        customer_filter_by_email: '//input[@name="employeeFilter_email"]',
        customer_submit_filter: '//button[@id="submitFilterButtonemployee"]',
        customers_select_customer: '//input[@name="employeeBox[]"]',
        customer_bulk_action_button: '//div[@class="btn-group bulk-actions dropup"]/button',
        customer_bulk_action_delete_option: '//div[@class="btn-group bulk-actions dropup open"]/ul/li[7]/a',
        customer_delete_mode: '#deleteMode_deleted',
        customer_delete_button: '//div[@class="alert alert-warning"]/input[@type="submit" and @value="Delete"]',
        customer_green_block_validation: '//*[@id="content"]/div[4]/div',

    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};