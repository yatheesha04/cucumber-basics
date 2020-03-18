package com.sapient.step;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
    
    @Before
    public void setUp(){
        System.out.println("hi before here");
    }
    
    @After
    public void tearDown(){
        System.out.println("hi after here");
    }


}





