import { CommonActions } from "../actions/commonActions";
import data from "../../fixtures/locator.json";
import { fa, faker } from "@faker-js/faker";
const sharedContext = new CommonActions;

const randomName = faker.person.fullName();
const randomEmail = faker.internet.email();
const randomPassword = faker.internet.password();
const randomDay = faker.number.int({max: 31});
const randomMonth = faker.date.month();
const randomYear = faker.number.int({min:1900, max:2024}).toString();
const firstName = randomName.split(' ').slice(0, -1).join(' ');
const lastName = randomName.split(' ').slice(-1).join(' ');
const companyName = faker.company.name();
const address = faker.location.streetAddress();
const state = faker.location.state();
const city = faker.location.city();
const zipcode = faker.location.zipCode();
const mobileNo = faker.phone.number();
// const firstName = randomName.split( );
export class HomePage{
    landingPage(){
        cy.visit("https://www.automationexercise.com");
    };
    landingPageVerify(){
        sharedContext.verifyURLNavigation("https://www.automationexercise.com/")
    };
    navigateToLoginOrSigninPage(){
        sharedContext.clickIndx(data.navMenu , 3)
    };
    verifySignupNavigation(){
        sharedContext.verifyTextIndx(data.headingSize2,2,"New User Signup!")
    };
    userRegisterValidDetails(){
        sharedContext.enterInputFieldIndx(data.userInput,4,randomName)
        sharedContext.enterInputFieldIndx(data.userInput,5,randomEmail)
        sharedContext.click(data.submit)
    };
    verifySignupAccountDetails(){
        sharedContext.verifyTextIndx(data.headingSize2,0,"Enter Account Information")
    };
    signupAccountMoreDetails(){
        sharedContext.clickIndx(data.genderRadio,1)
        sharedContext.enterInputField(data.password,randomPassword)
        sharedContext.select(data.select,0,randomDay)
        sharedContext.select(data.select,1,randomMonth)
        sharedContext.select(data.select,2,randomYear)
        sharedContext.checkCheckboxIndx(data.newsletterCheckbox,0)
        sharedContext.checkCheckboxIndx(data.newsletterCheckbox,1)
        sharedContext.enterInputFieldIndx(data.textInput,2,firstName)
        sharedContext.enterInputFieldIndx(data.textInput,3,lastName)
        sharedContext.enterInputFieldIndx(data.textInput,4,companyName)
        sharedContext.enterInputFieldIndx(data.textInput,5,address)
        sharedContext.select(data.select,3,"United States")
        sharedContext.enterInputFieldIndx(data.textInput,7,state)
        sharedContext.enterInputFieldIndx(data.textInput,8,city)
        sharedContext.enterInputFieldIndx(data.textInput,9,zipcode)
        sharedContext.enterInputFieldIndx(data.textInput,10,mobileNo)
        sharedContext.clickIndx(data.submit_btn,0)
    };
    verifySignupAccountMoreDetails(){
        sharedContext.containsText(data.contineVerifySize,"Account Created!")
        sharedContext.click(data.contineSignupButton)
        sharedContext.clickIndx(data.navMenu,4)
        sharedContext.containsText(data.contineVerifySize,"Account Deleted!")
        sharedContext.click(data.contineSignupButton)
    };
    verifyValidLoginNavigation(){
    sharedContext.containsTextIndx(data.headingSize2,0,"Login to your account")}
    
    ValidLogin(){
    sharedContext.enterInputFieldIndx(data.loginEmail,0,"testingvvgv@testft.com")
    sharedContext.enterInputField(data.loginPassword,"9NkeX9pBGjNk22t")
    sharedContext.clickIndx(data.submit_btn,0)
    };
    verifyValidLogin(){
    sharedContext.containsText(data.navigationMenu,"Logged in as")
    }
    invalidLogin(){
    sharedContext.enterInputFieldIndx(data.loginEmail,0,"tdffjdbfjdb@djjd.com")
    sharedContext.enterInputField(data.loginPassword,"9NkeX9pBGjNk22t")
    sharedContext.clickIndx(data.submit_btn,0)   
    }
    verifyInvalidLogin(){
    sharedContext.containsTextIndx(data.paragraph,0,"Your email or password is incorrect!")
    }

}