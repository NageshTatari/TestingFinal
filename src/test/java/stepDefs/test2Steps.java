package stepDefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import static com.jayway.restassured.RestAssured.given;

public class test2Steps {


    @Given("^user executes second feature file$")
    public void user_executes_second_feature_file() throws Throwable {

        System.out.println("Test 2 Steps 1");

        given().when().get("/get").then().statusCode(20);
        given().when().get("/garage/slots/999")
                .then().statusCode(404);

    }

    @When("^execution successful$")
    public void execution_successful() throws Throwable {

        System.out.println("Test 2 Steps 2");


    }

    @Then("^user presented with test reports$")
    public void user_presented_with_test_reports() throws Throwable {

        System.out.println("Test 2 Steps 3");
        

    }
}
