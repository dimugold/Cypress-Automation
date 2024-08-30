import { CommonActions } from "../actions/commonActions";
import { Faker } from "@faker-js/faker";
import data  from "../../fixtures/locator.json";
import { HomePage } from "./home";
const sharedContext =  new CommonActions;
const homePage = new HomePage;

export class CartPage {
    navigateProductPage(){
        sharedContext.clickIndx(data.navMenu , 1)
    }
    verifyProductPageDetails(){
        sharedContext.containsText(data.productTitle,"All Products")
        sharedContext.containsText(data.productSideNavBar,"Category")
    }
    navigateSingleProduct(){
        sharedContext.clickIndx(data.productSelect,1)
    }
    singleProductAvailable(){
        sharedContext.containsTextIndx(data.productInformation,4,"Quantity:")
        sharedContext.containsTextIndx(data.productInformation,5,"Availability: In Stock")
        sharedContext.containsTextIndx(data.productInformation,6,"Condition:")
        sharedContext.containsTextIndx(data.productInformation,7,"Brand:")
        sharedContext.containsTextIndx(data.productInformation,2,"Category")

    }
    addCart(){
        sharedContext.clickIndx(data.submit_btn,1)
    }
    viewCart(){
        sharedContext.click(data.viewCart)
    }
    searchProduct(){
        sharedContext.enterInputField(data.searchProduct,"dress")
        sharedContext.clickIndx(data.submit_btn,0)
        sharedContext.containsText(data.productTitle,"Searched")
    }
    verifyProductCheckoutDetails(){
        sharedContext.containsText(data.cartDescription,"Men ")
        sharedContext.containsText(data.cartPrice,"Rs.")
        sharedContext.containsText(data.cartTotal,"Rs. ")
        // sharedContext.containsText(data.cartProduct," ")
    }
    deleteCartItem(){
    sharedContext.click(data.cartItemDelete)}

    readdToCart(){
        sharedContext.click(data.newCartAdd)
        sharedContext.clickIndx(data.productSelect,1)
        sharedContext.clickIndx(data.submit_btn,1)
        sharedContext.click(data.viewCart)
    }
    proceedtoCheckout(){
        sharedContext.clickIndx(data.buttonBtn,0)
        sharedContext.click(data.redirectToLogin)
        homePage.ValidLogin()
        sharedContext.clickIndx(data.navMenu , 2)
        sharedContext.clickIndx(data.buttonBtn,0)
        sharedContext.clickIndx(data.buttonBtn,0)
    }
}