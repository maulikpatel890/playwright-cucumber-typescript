Feature: User Authentication tests

  Background:
    Given User navigates to the application

  @smoke
  Scenario: Login should be success when username and password are correct
    And "standard_user" User enters the username
    And User enters the valid password
    When User clicks on the login button
    Then Verify that login should be successful

  @test
  Scenario: Login should not be successful if password is incorrect
    And "standard_user" User enters the username
    And User enters the invalid password
    When User clicks on the login button
    But Verify error message for login with invalid password
