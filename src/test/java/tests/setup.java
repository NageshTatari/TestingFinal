package tests;

import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.hamcrest.CoreMatchers.containsString;
import static com.jayway.restassured.RestAssured.given;
import static com.jayway.restassured.RestAssured.objectMapper;

public class setup {

    @cucumber.api.java.Before
    public void verifyNameOfGarage() {

        System.out.println("Hello Before");

    }
}
