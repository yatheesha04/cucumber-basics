@sanity @productinduct
Feature: Functionality to induct a product to a cluster with initial price

  Scenario: for inducting new product with price
    Given the product price management application is running
    When the retailer login with given credentials, and are valid
    And the retailer is on home page
