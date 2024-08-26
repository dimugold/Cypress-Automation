Feature: Register a user

  Background: Navigate to the Website
    Given I navigate to the Website
    Then I Verify that home page is visible successfully

  Scenario: Register with valid details
    When I navigate to the Signup / Login button
    Then I Verify New User Signup! is visible
    And I fill in correct data 
    Then I verify that i am in the more details page
    And I fill the signup form

Scenario: Login with valid details
    When I navigate to the Signup / Login button
    Then I Verify Login to your account is visible
    And I login in successfully to the account


Scenario: Login with invalid details
    When I navigate to the Signup / Login button
    Then I Verify Login to your account is visible
    And Login is unsuccessful

