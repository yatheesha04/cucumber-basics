package com.sapient.step;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoanStep {

	@Given("^the computer is working$")
	public void the_computer_is_working() {
		System.out.println("-----The computer is working-----");
	}
	
	@Given("^the person is working in \"([^\"]*)\" office$")
	public void the_person_is_working_in_office(String arg1) throws Throwable {
	    System.out.println("the person is working in "+ arg1 + "office -----");
	}

	@When("^the credit score is more than \"([^\"]*)\"$")
	public void the_credit_score_is_more_than(String arg1) throws Throwable {
	    System.out.println("the credit score is more than "+arg1 +"--------");
	}

	@Then("^grant loan of \"([^\"]*)\"$")
	public void grant_loan_of(String arg1) throws Throwable {
	    System.out.println("grant loan of "+arg1+"--------");
	}
}
