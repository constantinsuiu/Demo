@rabo
Feature: Click around RaboBank website

  Scenario: As a visitor I can click around the Who We are and Contact pages

    Given I navigate to RaboBank
    When I navigate to Who We are card
    Then I view the company ratings
