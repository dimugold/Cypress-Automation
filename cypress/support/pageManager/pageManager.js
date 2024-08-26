import { HomePage } from "../pageObjects/home";
import { CartPage } from "../pageObjects/cart";
export class PageManager{
constructor(){
this.homePage = new HomePage()
this.cartPage = new CartPage();
}

onHomePage(){
    return this.homePage
}

onCartPage(){
    return this.cartPage
}
}