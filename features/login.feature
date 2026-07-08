# features/login.feature
Feature: Login

  Scenario: Standard user logs in successfully
    Given I am on the login page
    When I log in with username "standard_user" and password "secret_sauce"
    Then I should see the products page