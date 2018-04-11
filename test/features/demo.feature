Feature: Login Account
  I want to test Login page
Scenario Outline: Check review password apply
    Given I open website <website>
    When I input email <email>, password <password> 
    Then I click login button
    Then I click Explore tool
    Then I click View select box and choose Table
    Then I click down arrow button of the Explore
    Then I input 5 days ago <days> of Start text box
    Then I click down arrow button of the Time
    Then I click Measure select box
    Then I input <user> of Measure text box
    Then I click go button
    Then I verify text <message>
    Then I close browser
    Examples:
      | website                  | email                   | password|days      |user|message|
      | https://demo.interana.com| hieutrandn9889@gmail.com| 12345678|5 days ago|user|WIKIPEDIA - FIRST (__DAY__)|
