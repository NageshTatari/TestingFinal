Feature: User should be able to run feature file

  As a user
  I would be able to run feature file
  So that all tests executed

  @Test
  Scenario: User should be able to run feature file tests
    Given User runs runcucumber class
    When cucumber executes successfully
    Then all feature tests executed

