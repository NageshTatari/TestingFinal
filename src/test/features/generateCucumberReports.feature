Feature: User should be able to generate cucumber graphical reports
  As a user
  I would be able to run generate reports feature file
  So that I can see cucumber graphical reports generated in target location


  @Reports
  Scenario: User generates cucumber graphical reports after test execution

    Given user runs generate cucumber reports
    When  successfully runs
    Then user should see graphical reports generated in target