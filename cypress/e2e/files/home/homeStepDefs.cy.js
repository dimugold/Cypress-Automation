import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { PageManager } from "../../../support/pageManager/pageManager";
const pageManager = new PageManager()

Given("I navigate to the Website",()=>{
    pageManager.onHomePage().landingPage();
});

Then("I Verify that home page is visible successfully",()=>{
    pageManager.onHomePage().landingPageVerify();
});

When("I navigate to the Signup / Login button",()=>{
    pageManager.onHomePage().navigateToLoginOrSigninPage();
});

Then("I Verify New User Signup! is visible",()=>{
    pageManager.onHomePage().verifySignupNavigation();
});

And("I fill in correct data",()=>{
    pageManager.onHomePage().userRegisterValidDetails();
});

Then("I verify that i am in the more details page",()=>{
    pageManager.onHomePage().verifySignupAccountDetails();
});

And("I fill the signup form",()=>{
    pageManager.onHomePage().signupAccountMoreDetails();
    pageManager.onHomePage().verifySignupAccountMoreDetails();
});

Then("I Verify Login to your account is visible",()=>{
    pageManager.onHomePage().verifyValidLoginNavigation();
});

And("I login in successfully to the account",()=>{
pageManager.onHomePage().ValidLogin();
pageManager.onHomePage().verifyValidLogin();

});

And("Login is unsuccessful",()=>{
pageManager.onHomePage().invalidLogin();
pageManager.onHomePage().verifyInvalidLogin();
});