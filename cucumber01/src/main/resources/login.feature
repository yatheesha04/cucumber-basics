@sanity @login
Feature: login feature

  Scenario: check if the user is valid login
    Given the application is working
    When the credentials are valid
    
    		| login | password |
    		| Nidhi | Harry |
    		| Nithin | Ausis |
    		| Karteek | God |
    		
    		
    Then take user to home page

  Scenario: check if the user is invalid login
    Given the application is working
    When the credentials are "invalid"
    Then take user to login page again
