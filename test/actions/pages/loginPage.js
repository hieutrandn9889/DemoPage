/**
 * Created by hieutran on 17/03/2018.
 */
var expect              = require('./../../../expect.js');
var UI_LOGIN_PAGE       = require('../../interface/loginPageUI.js');
var UI_EXPLORE_PAGE     = require('../../interface/explorePageUI.js');
var abstractPage        = require('../commons/abstractPage.js');

var LoginTestCasePage    = function () {
    
    this.getURL = function (value) {
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(5000);
        browser.manage().window().maximize();
        browser.get(value);
    };

    // input email and password
    this.typeUserNamePassword = function (i_email, i_password) {
        abstractPage.sendkeyToElementValue(UI_LOGIN_PAGE.email, i_email);
        abstractPage.sendkeyToElementValue(UI_LOGIN_PAGE.password, i_password);
    };

    // click login button
    this.clickLoginBtn = function () {
        abstractPage.clickToElement(UI_LOGIN_PAGE.loginBtn);
        browser.sleep(2000);
    };
    
};

module.exports = LoginTestCasePage;