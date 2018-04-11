/**
 * Created by hieutran on 17/03/2018.
 */
var expect              = require('./../../../expect.js');
var UI_EXPLORE_PAGE     = require('../../interface/explorePageUI.js');
var abstractPage        = require('../commons/abstractPage.js');

var ExploreTestCasePage    = function () {
    
     // click explore tool
     this.clickExploreBtn = function () {
        abstractPage.clickToElement(UI_EXPLORE_PAGE.exploreBtn);
        browser.sleep(2000);
    };

    // click view select
    this.clickViewSelectBtn = function () {
        abstractPage.clickToElement(UI_EXPLORE_PAGE.viewSelectBox);
        abstractPage.clickToElement(UI_EXPLORE_PAGE.tableBtn);
        browser.sleep(2000);
    };

    // click down arrow button of the Explore
    this.clickDownArrowExploreBtn = function () {
        abstractPage.clickToElement(UI_EXPLORE_PAGE.downArrownExplore);
        browser.sleep(2000);
    };

    //Input "5 days ago"
    this.typeStartTextBox = function (i_days) {
        abstractPage.sendkeyToElementValue(UI_EXPLORE_PAGE.startTextBox, i_days);
    };

    // click down arrow button of the Time
    this.clickDownArrowTimeBtn = function () {
        abstractPage.clickToElement(UI_EXPLORE_PAGE.downArrownTime);
        browser.sleep(2000);
    };

    // click Measure select box
    this.clickMeasureSelectBtn = function () {
        abstractPage.clickToElement(UI_EXPLORE_PAGE.measureSelectBox);
        abstractPage.clickToElement(UI_EXPLORE_PAGE.firstMeasureSelectBox);
        browser.sleep(2000);
    };
 
    //Input "user" for measure
    this.typeGroupTextBox = function (i_user) {
        abstractPage.sendkeyToElementValue(UI_EXPLORE_PAGE.groupTextBox, i_user);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
        browser.sleep(2000);
    };
    
    // click go button
    this.clickGoBtn = function () {
        abstractPage.clickToElement(UI_EXPLORE_PAGE.goBtn);
        browser.sleep(5000);
    };

    // verify message    
    this.assertToElement = function (id_message) {
        abstractPage.assertToElementValue(UI_EXPLORE_PAGE.mgnVerify, id_message);
        browser.sleep(3000);
    };

};

module.exports = ExploreTestCasePage;