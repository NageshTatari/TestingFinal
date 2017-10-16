package stepDefs;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(

        format = {"pretty", "html:test-reports/cucumber-report", "json:test-reports/cucumber-report/cucumber.json"},
        features = {"src/test/features"},
        tags = {"@Test2, @Test"}

)



public class RunCucumber {
}
