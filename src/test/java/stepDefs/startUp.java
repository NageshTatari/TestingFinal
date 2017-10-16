package stepDefs;

import com.jayway.restassured.RestAssured;
import cucumber.api.java.Before;
import org.junit.BeforeClass;

public class startUp {


    @Before
    public void startUp(){

            String baseHost = System.getProperty("server.host");
            if(baseHost==null){
                baseHost = "https://httpbin.org";
            }

            RestAssured.baseURI = baseHost;

        }

    }


