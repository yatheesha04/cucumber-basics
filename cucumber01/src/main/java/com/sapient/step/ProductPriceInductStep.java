package com.sapient.step;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class ProductPriceInductStep {

	@Given("^the product price management application is running$")
	public void the_product_price_management_application_is_running() throws Throwable {
	    System.out.println("the product price management application is running****");
	}

	@When("^the retailer login with given credentials, and are valid$")
	public void the_retailer_login_with_given_credentials_and_are_valid() throws Throwable {
		System.out.println("the retailer login with given credentials, and are valid****");
	    
	}

	@When("^the retailer is on home page$")
	public void the_retailer_is_on_home_page() throws Throwable {
		System.out.println("the retailer is on home page****");
	   
	}

}
