package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static com.jayway.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.*;


public class testSteps {




    @Given("^User runs runcucumber class$")
    public void user_runs_runcucumber_class() throws Throwable {

            given().when().get("/get")
                    .then().statusCode(200).log().all();

            given().when().get("/get")
                    .then().body(containsString("headers"));

            given().when().get("/get")
                    .then().body(containsString("https://httpbin.org/get"));
                    System.out.println("Test step 1");

    }

    @When("^cucumber executes successfully$")
    public void cucumber_executes_successfully() throws Throwable {

            given().when().get("/get")
                    .then().body("headers.Connection",equalTo("close"))
                            .body("headers.Host",equalTo("httpbin.org"));
                                System.out.println("Test step 2");
    }

    @Then("^all feature tests executed$")
    public void all_feature_tests_executed() throws Throwable {

            given().when().get("/get")
                    .then().body(containsString("args"))
                                              .body("headers.Accept", equalTo("*/*"))
                                               .statusCode(200);
                                                System.out.println("Test step 3");

    }
}
