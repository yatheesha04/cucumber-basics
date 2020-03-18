@sanity @loan
Feature: to sanction loan

#before
Background:
	Given the computer is working
 
  Scenario Outline: 
    Given the person is working in "<officetype>" office
    When the credit score is more than "<creditScore>"
    Then grant loan of "<amount>"

    Examples: 
      | officetype | creditScore | amount |
      | govt       |         200 | zero   |
      | govt       |         500 | 4lakhs |
      | private    |         200 | 5lakhs |
      | private    |         200 | 6lakhs |
