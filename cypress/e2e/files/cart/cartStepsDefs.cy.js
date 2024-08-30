import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";
import { PageManager } from "../../../support/pageManager/pageManager";
const pageManager = new PageManager()

Given("I navigate to the Website",()=>{
    pageManager.onHomePage().landingPage();
});

When("I navigate to the product page",()=>{
    pageManager.onCartPage().navigateProductPage();
});

And("I verify that details is visible",()=>{
    pageManager.onCartPage().verifyProductPageDetails();
});

When("I navigate to a single product",()=>{
pageManager.onCartPage().navigateSingleProduct();
});

And("I verify the product is available",()=>{
pageManager.onCartPage().singleProductAvailable();
});

And("I add the item to cart",()=>{
pageManager.onCartPage().addCart();
pageManager.onCartPage().viewCart();
pageManager.onCartPage().navigateProductPage();
});

Then("I search for an item",()=>{
pageManager.onCartPage().searchProduct();
});

And("I add the item to my cart",()=>{
pageManager.onCartPage().addCart();
});
And("I verify my item can be deleted from cart",()=>{
    pageManager.onCartPage().deleteCartItem();
})
Then("I view my cart",()=>{
pageManager.onCartPage().viewCart();
pageManager.onCartPage().verifyProductCheckoutDetails();
});
Then("I readd the item to my cart",()=>{
    pageManager.onCartPage().readdToCart();

})
And("I proceed to checkout",()=>{
pageManager.onCartPage().proceedtoCheckout();

});