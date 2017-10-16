package stepDefs;

import com.github.mkolisnyk.cucumber.reporting.CucumberResultsOverview;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GraphicalReports {


    CucumberResultsOverview results = new CucumberResultsOverview();

    @Given("^user runs generate cucumber reports$")
    public void user_runs_generate_cucumber_reports() throws Throwable {

        results.setOutputDirectory("target");
        results.setOutputName("cucumber-results");

    }

    @When("^successfully runs$")
    public void successfully_runs() throws Throwable {



        results.setSourceFile("test-reports/cucumber-report/cucumber.json");


    }

    @Then("^user should see graphical reports generated in target$")
    public void user_should_see_graphical_reports_generated_in_target() throws Throwable {

        results.executeFeaturesOverviewReport();
    }

}
