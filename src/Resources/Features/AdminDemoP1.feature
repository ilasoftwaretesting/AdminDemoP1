@AdminDemoP1
  Feature: I an able to get discount

    Scenario: I am able to det discount on this website successfully
      Given I am on login page
      When I click on login button
      And I click on promotion
      And I select discount from promotion
      And I click on add new button of the right hand side of the page corner
      And I enter tex name field
      And I click on user percentage
      And I enter 10 percentage discount on discount percentage field
      And I select start date
      And I select end date
      And I enter text in admin comment
      And I click on save button
      Then I able to added discount successfully



