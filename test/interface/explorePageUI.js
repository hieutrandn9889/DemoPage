var UI_EXPLORE_PAGE = {
    exploreBtn:            "//a[@data-page='explorer']",
    viewSelectBox:         "//li[@data-value='\"time\"']",
    tableBtn:              "//span[contains(text(), 'Table')]",
    downArrownExplore:     "(//span[@class='ia-icon icon-chevron-down pull-right'])[1]",
    startTextBox:          "//input[@name='start']",
    downArrownTime:        "(//span[@class='ia-icon icon-chevron-down pull-right'])[2]",
    measureSelectBox:      "//span[contains(text(),'Count Events')]",
    firstMeasureSelectBox: "//ul[@class='chzn-results']/li[contains(text(),'First')]",
    groupTextBox:          "(//input[@name='some-random-name'])[2]",
    goBtn:                 "//span[contains(text(),'GO')]",
    // mgnVerify:             "//div[@class='chartCanvasTitleSummary']/span[contains(text(),'Measuring')]",

    mgnVerify: "//div[@class='chartCanvasTitleText' and contains(text(), 'wikipedia - FIRST (__day__)')]",
}

module.exports = UI_EXPLORE_PAGE;
