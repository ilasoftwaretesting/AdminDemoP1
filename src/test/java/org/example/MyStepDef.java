package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;

public class MyStepDef extends Utils{
    HomePage homePage = new HomePage();
    DashBoard dashBoard = new DashBoard();



    @Given("^I am on login page$")
    public void i_am_on_login_page() {


    }

    @When("^I click on login button$")
    public void i_click_on_login_button() {
        homePage.loginbutton();


    }
    //String welcomeMessage = driver.findElement(By.cssSelector(" [class='skin-blue sidebar-mini']")).getText();
        //Assert.assertEquals(welcomeMessage, "Dashboard");
        //System.out.println("I am able to see Dashboard on promotion page");

    @When("^I click on promotion$")
    public void i_click_on_promotion()  {
        dashBoard.promotions();


    }

    @When("^I select discount from promotion$")
    public void i_select_discount_from_promotion() {
        dashBoard.discounts();

    }

    @When("^I click on add new button of the right hand side of the page corner$")
    public void i_click_on_add_new_button_of_the_right_hand_side_of_the_page_corner() {
        dashBoard.addnew();

    }

    @When("^I enter tex name field$")
    public void i_enter_tex_name_field()  {
        dashBoard.Name();

    }

    @When("^I click on user percentage$")
    public void i_click_on_user_percentage() {
        dashBoard.UsagePercentage();

    }

    @When("^I enter (\\d+) percentage discount on discount percentage field$")
    public void i_enter_percentage_discount_on_discount_percentage_field(int arg1)  {
        dashBoard.Discount();

    }

    @When("^I select start date$")
    public void i_select_start_date() {
        dashBoard.startdate();

    }

    @When("^I select end date$")
    public void i_select_end_date()  {

    }

    @When("^I enter text in admin comment$")
    public void i_enter_text_in_admin_comment()  {

    }

    @When("^I click on save button$")
    public void i_click_on_save_button()  {

    }

    @Then("^I able to added discount successfully$")
    public void i_able_to_added_discount_successfully()  {

    }




}
