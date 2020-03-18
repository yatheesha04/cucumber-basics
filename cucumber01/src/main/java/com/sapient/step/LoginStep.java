package com.sapient.step;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {

	@Given("^the application is working$")
	public void the_application_is_working() throws Throwable {
	    System.out.println("The application is working>>>>>>>>");
	}

//	@When("^the credentials are \"([a-zA-Z0-9]{1,})\"$")
//	public void the_credentials_are_valid(String validStatus,DataTable dataTable) throws Throwable {
//		System.out.println("The Credentials are" + validStatus +">>>>>>>>");
//		
		
		@When("^the credentials are valid$")
		public void the_credentials_are_valid(DataTable dataTable) throws Throwable {
			System.out.println("The Credentials are valid>>>>>>>>");
	    
		List<Map<String,String>> list=dataTable.asMaps(String.class, String.class);
		
//		System.out.println("Login name:"+list.get(0).get("login"));
//		System.out.println("Password:"+list.get(0).get("password"));
//		
//		System.out.println("Login name:"+list.get(1).get("login"));
//		System.out.println("Password:"+list.get(1).get("password"));
		
		for(int i=0;i<3;i++) {
			System.out.println("Login name:"+list.get(i).get("login"));
			System.out.println("Password:"+list.get(i).get("password"));
		}
	}

	@Then("^take user to home page$")
	public void take_user_to_home_page() throws Throwable {
		System.out.println("Take user to home page>>>>>>>>");
	   
	}
	
	
	@Then("^take user to login page again$")
	public void take_user_to_login_page_again() throws Throwable {
	   System.out.println("Take user to login page again>>>>>");
	}
}
