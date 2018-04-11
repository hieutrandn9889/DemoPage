/**
 * Created by hieutran on 08/10/2017.
 */

var DemoTestCasePage = function () {

    var LoginTestCasePage   = require("../actions/pages/loginPage.js");
    var ExploreTestCasePage = require("../actions/pages/explorePage.js");

    this.Before(function (scenario, callback) {
        this.loginPage    = new LoginTestCasePage();
        this.explorePage  = new ExploreTestCasePage();
        callback();
    });

    this.Given('I open website $website', function (website, callback) {
        this.loginPage.getURL(website);
        callback();
    });

    this.When('I input email $email, password $password', function (email, password, callback) {
        this.loginPage.typeUserNamePassword(email, password);
        callback();
    });

    // click login button
    this.Then('I click login button', function (callback) {
        this.loginPage.clickLoginBtn();
        callback();
    });

    //   I click Explore tool
    this.Then('I click Explore tool', function (callback) {
        this.explorePage.clickExploreBtn();
        callback();
    });

    //  I click View select box and choose Table
    this.Then('I click View select box and choose Table', function (callback) {
        this.explorePage.clickViewSelectBtn();
        callback();
    });

    //  I click down arrow button of the Explore
    this.Then('I click down arrow button of the Explore', function (callback) {
        this.explorePage.clickDownArrowExploreBtn();
        callback();
    });

    // I input 5 days ago <days> of Start text box
    this.Given('I input 5 days ago $days of Start text box', function (days, callback) {
        this.explorePage.typeStartTextBox(days);
        callback();
    });

    //  I click down arrow button of the Time
    this.Then('I click down arrow button of the Time', function (callback) {
        this.explorePage.clickDownArrowTimeBtn();
    callback();
    });

    //  I click Measure select box
    this.Then('I click Measure select box', function (callback) {
        this.explorePage.clickMeasureSelectBtn();
    callback();
    });

    //I input <user> of Measure text box
    this.Given('I input $user of Measure text box', function (user, callback) {
        this.explorePage.typeGroupTextBox(user);
        callback();
    });

    //  I click go button
    this.Then('I click go button', function (callback) {
        this.explorePage.clickGoBtn();
    callback();
    });

    // I verify text
    this.Then('I verify text $message', function (message, callback) {
        this.explorePage.assertToElement(message);
        callback();
    });

    // close browser 
    this.Then('I close browser', function (callback) {
        browser.close();
        callback();
    });


};

module.exports = DemoTestCasePage;