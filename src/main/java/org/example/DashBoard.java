package org.example;


import org.openqa.selenium.By;

public class DashBoard extends Utils {

    private By Promotions = By.xpath("/html/body/div[3]/div[2]/div/ul/li[5]/a/span");
    private By Discounts = By.xpath("/html/body/div[3]/div[2]/div/ul/li[5]/ul/li[1]/a/span");
    private By Addnew = By.cssSelector("a[class='btn bg-blue']");
    private By name = By.id("Name");
    private By Usagepercentage = By.cssSelector("label[for='UsePercentage']");
    private By discountAdd = By.cssSelector("span[class='k-icon k-i-arrow-60-up']");
    private By Startdate = By.id ("StartDateUtc");
    //private By
    // "//*[@id='discount-info']/div[2]/div/div[10]/div[2]/span[1]/span"


    public void promotions() {
        ClickOnElement(Promotions);
    }

    public void discounts() {
        waitForElementToBevisible(Discounts, 20);
        ClickOnElement(Discounts);
    }

    public void addnew() {
        waitForElementToBevisible(Addnew, 20);
        ClickOnElement(Addnew);
    }

    public void Name() {

        enterText(name, "Summer Sale");
    }

    public void UsagePercentage() {
        waitForElementToBevisible(Usagepercentage, 20);
        ClickOnElement(Usagepercentage);
    }

    public void Discount() {
        for (int i = 0; i < 10; i++) {
            ClickOnElement(discountAdd);
        }

    }

    public void startdate() {

        waitForElementToBevisible(Startdate, 20);

            ClickOnElement(Startdate);
        }


    }
