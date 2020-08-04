package org.example;

import org.openqa.selenium.By;

import static org.example.Utils.ClickOnElement;
import static org.example.Utils.waitForElementToBevisible;

public class HomePage {


    private By Loginbutton=By.cssSelector("input[class='button-1 login-button']");

    public void loginbutton() {
        waitForElementToBevisible(Loginbutton, 20);
        ClickOnElement(Loginbutton);
    }









}
