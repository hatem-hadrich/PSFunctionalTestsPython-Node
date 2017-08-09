'use strict';
var common = require('./common.webdriverio');
var path = require('path');
var should = require('should');
var argv = require('minimist')(process.argv.slice(2));

global.date_time = new Date().getTime();
global.URL = argv.URL;
global.browser = argv.browser;
global.module_tech_name = 'contact form';
global.saucelabs = argv.SAUCELABS;
global._projectdir = path.join(__dirname, '..', '..');
global.product_id = new Date().getTime();
global.new_customer_email = 'pub' + date_time + '@prestashop.com';
global.name_table= [];
global.nameTableAfterSort= [];
global.price_table= [];
global.priceTableAfterSort= [];
global.decreasingPrice_table= [];
global.decreasingPriceTableAfterSort= [];
global.author_table= [];
global.description_table= [];
global.tech_name_table= [];
global.child_categories_table= [];
global.categories_table= [];
global.type_table= [];
global.check_module= new Array();

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
        click_outside: '//*[@id="product_catalog_list"]/div[2]/div/table/thead/tr[1]/th[3]',
        click_outside_customer: '//*[@id="form-customer"]/div/div[1]/span[1]',
        click_outside_product: '#product_catalog_list > div:nth-child(2) > div > table > tbody > tr > td',
        profil: '#employee_infos',
        new_profil: '.employee-dropdown.dropdown > div',
        logout: '#header_logout',
        products: '#subtab-AdminCatalog',
        customers: '#subtab-AdminParentCustomer',
        dashboard: '#tab-AdminDashboard',
        //go_to_catalog: '//*[@id="form"]/div[4]/div[2]/div/div[2]/a[2]',
        //go_to_catalog: '#form > div.product-footer > div.col-lg-6.text-lg-right > div > div.dropdown-menu > a.dropdown-item.go-catalog.js-btn-save',
        go_to_catalog: '#product_form_save_go_to_catalog_btn',
        more_option: '[class="btn btn-primary dropdown-toggle"]',
        new_product: '#page-header-desc-configuration-add',
        menu: '#nav-sidebar',
        product_name: '#form_step1_name_1',
        product_combinations: '//*[@id="show_variations_selector"]/div[2]/label/input',
        product_combinations_tab: '//*[@id="tab_step3"]/a',
        product_shipping_tab: '//*[@id="tab_step4"]/a',
        product_pricing_tab: '//*[@id="tab_step2"]/a',
        product_SEO_tab: '//*[@id="tab_step5"]/a',
        product_options_tab: '//*[@id="tab_step6"]/a',
        save_product: '//*[@id="form"]/div[4]/div[2]/div/button[1]',
        save_product_btn: '//*[@id="submit"]',
        catalog_list: '#product_catalog_list',
        catalog_product_name: '//*[@id="product_catalog_list"]/div[2]/div/table/tbody/tr/td[3]/a',
        green_validation: '[class="growl growl-notice growl-medium"]',
        close_validation: '.growl-close',
        validation_msg: '//*[@id="growls"]/div/div[3]',
        red_validation: '[class="growl growl-error growl-medium"]',
        summary_button: '[href="#description_short"]',
        summary: 'form_step1_description_short_1_ifr', //not declare than an id because using into function "frame" that not need this information;
        description_button: '[href="#description"]',
        description: 'form_step1_description_1_ifr',//not declare than an id because using into function "frame" that not need this information;
        priceTE_shortcut: '#form_step1_price_shortcut',
        quantity_shortcut: '#form_step1_qty_0_shortcut',
        picture: '[class="dz-hidden-input"]',
        picture_cover: '.iscover',
        product_online: '.switch-input ',
        catalogue_filter_by_name: '//input[@name="filter_column_name"]',
        customer_filter_by_email: '//input[@name="customerFilter_email"]',
        catalogue_submit_filter: '//button[@name="products_filter_submit"]',
        customer_submit_filter: '//button[@id="submitFilterButtoncustomer"]',
        catalogue_filter_reset: '//button[@type="reset" and @style="display: inline-block;"]',
        catalogue_select_product: '//input[@name="bulk_action_selected_products[]"]',
        customers_select_customer: '//input[@name="customerBox[]"]',
        catalogue_bulk_action_button: '#product_bulk_menu',
        customer_bulk_action_button: '//div[@class="btn-group bulk-actions dropup"]/button',
        catalogue_bulk_action_delete_option: '//div[@class="btn-group dropup open"]/div[1]/a[4]',
        customer_bulk_action_delete_option: '//div[@class="btn-group bulk-actions dropup open"]/ul/li[7]/a',
        catalogue_delete_now_button: '//div[@class="modal-footer"]/button[2]',
        customer_delete_mode: '#deleteMode_deleted',
        customer_delete_button: '//div[@class="alert alert-warning"]/input[@type="submit" and @value="Delete"]',

        //sort modules
        modules_menu: '#subtab-AdminParentModulesSf',
        modules_page_loaded: '.module-search-result-wording',
        sort_module: '//*[@id="main-div"]/div[3]/div[2]/div/div[2]/div/div[7]/div/div[2]/div[2]/select',
        view_list: '//*[@id="module-sort-list"]',

        //search module
        modules_search: '.pstaggerAddTagInput.module-tags-input',
        modules_search_button: '.input-group-addon.module-search-icon',
        nbr_module: '[class="module-sorting-search-wording"]',

    },
    shouldExist: function (err, existing) {
        should(err).be.not.defined;
        should(existing).be.true;
    }
};