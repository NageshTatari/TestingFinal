$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("generateCucumberReports.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to generate cucumber graphical reports",
  "description": "As a user\nI would be able to run generate reports feature file\nSo that I can see cucumber graphical reports generated in target location",
  "id": "user-should-be-able-to-generate-cucumber-graphical-reports",
  "keyword": "Feature"
});
formatter.before({
  "duration": 338964074,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User generates cucumber graphical reports after test execution",
  "description": "",
  "id": "user-should-be-able-to-generate-cucumber-graphical-reports;user-generates-cucumber-graphical-reports-after-test-execution",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Reports"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user runs generate cucumber reports",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "successfully runs",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user should see graphical reports generated in target",
  "keyword": "Then "
});
formatter.match({
  "location": "GraphicalReports.user_runs_generate_cucumber_reports()"
});
formatter.result({
  "duration": 71292071,
  "status": "passed"
});
formatter.match({
  "location": "GraphicalReports.successfully_runs()"
});
formatter.result({
  "duration": 27106,
  "status": "passed"
});
formatter.match({
  "location": "GraphicalReports.user_should_see_graphical_reports_generated_in_target()"
});
formatter.result({
  "duration": 11788988,
  "error_message": "java.io.IOException: Input is invalid JSON; does not start with \u0027{\u0027 or \u0027[\u0027, c\u003d-1\n\tat com.cedarsoftware.util.io.JsonReader.readJsonObject(JsonReader.java:1494)\n\tat com.cedarsoftware.util.io.JsonReader.readObject(JsonReader.java:707)\n\tat com.github.mkolisnyk.cucumber.reporting.CucumberResultsCommon.readFileContent(CucumberResultsCommon.java:120)\n\tat com.github.mkolisnyk.cucumber.reporting.CucumberResultsCommon.readFileContent(CucumberResultsCommon.java:142)\n\tat com.github.mkolisnyk.cucumber.reporting.CucumberResultsCommon.readFileContent(CucumberResultsCommon.java:135)\n\tat com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview.executeOverviewReport(CucumberResultsOverview.java:123)\n\tat com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview.executeFeaturesOverviewReport(CucumberResultsOverview.java:145)\n\tat com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview.executeFeaturesOverviewReport(CucumberResultsOverview.java:142)\n\tat stepDefs.GraphicalReports.user_should_see_graphical_reports_generated_in_target(GraphicalReports.java:34)\n\tat ✽.Then user should see graphical reports generated in target(generateCucumberReports.feature:12)\n",
  "status": "failed"
});
formatter.uri("test.feature");
formatter.feature({
  "line": 1,
  "name": "User should be able to run feature file",
  "description": "\nAs a user\nI would be able to run feature file\nSo that all tests executed",
  "id": "user-should-be-able-to-run-feature-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 35156,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should be able to run feature file tests",
  "description": "",
  "id": "user-should-be-able-to-run-feature-file;user-should-be-able-to-run-feature-file-tests",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "User runs runcucumber class",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "cucumber executes successfully",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "all feature tests executed",
  "keyword": "Then "
});
formatter.match({
  "location": "testSteps.user_runs_runcucumber_class()"
});
formatter.result({
  "duration": 2670814778,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.cucumber_executes_successfully()"
});
formatter.result({
  "duration": 805840120,
  "status": "passed"
});
formatter.match({
  "location": "testSteps.all_feature_tests_executed()"
});
formatter.result({
  "duration": 577095222,
  "status": "passed"
});
formatter.uri("test2.feature");
formatter.feature({
  "line": 1,
  "name": "user should be able to test second feature file",
  "description": "\nAs a As a user\nI would be able to run feature file\nSo that all tests executed",
  "id": "user-should-be-able-to-test-second-feature-file",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14287,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "user should be able to run second feature file",
  "description": "",
  "id": "user-should-be-able-to-test-second-feature-file;user-should-be-able-to-run-second-feature-file",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user executes second feature file",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "execution successful",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user presented with test reports",
  "keyword": "Then "
});
formatter.match({
  "location": "test2Steps.user_executes_second_feature_file()"
});
formatter.result({
  "duration": 557308048,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c20\u003e doesn\u0027t match actual status code \u003c200\u003e.\n\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:83)\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:77)\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:60)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:235)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:247)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:598)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:760)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:210)\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:59)\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:166)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:120)\n\tat com.jayway.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\n\tat com.jayway.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:128)\n\tat com.jayway.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:117)\n\tat stepDefs.test2Steps.user_executes_second_feature_file(test2Steps.java:16)\n\tat ✽.Given user executes second feature file(test2.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "test2Steps.execution_successful()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "test2Steps.user_presented_with_test_reports()"
});
formatter.result({
  "status": "skipped"
});
});