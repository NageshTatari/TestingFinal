Feature: user should be able to test second feature file

  As a As a user
  I would be able to run feature file
  So that all tests executed

  @Test
  Scenario: user should be able to run second feature file
    Given user executes second feature file
    When execution successful
    Then user presented with test reports

  @Test2
  Scenario: user should be able to run second feature file
    Given user executes second feature file
    When execution successful
    Then user presented with test reports