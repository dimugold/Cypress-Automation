///  <reference types="cypress" />

export class CommonActions{
    click(locator){
        cy.get(locator).click();
    }
    
    clickIndx(locator, index){
        cy.get(locator).eq(index).click()
    }

    enterInputField(locator, input){
        cy.get(locator).clear().type(input)
    }

    enterInputFieldIndx(locator, index, input){
        cy.get(locator).eq(index).clear().type(input)
    }

    verifyAlert(locator, errorText){
        cy.get(locator)
        .should('be.visible')
        .should('include.text', errorText)
    }
    verifyText(locator,text){
        cy.get(locator).should('eq', text)
    }
    verifyTextIndx(locator,index,text){
        cy.get(locator).eq(index).should('contain.text', text)
    }
    verifyURLNavigation(url){
        cy.url().should('eq', url)
    }
    checkCheckbox(locator, force = true) {
        cy.get(locator).check({ force });
    }   
    checkCheckboxIndx(locator,index, force = true) {
        cy.get(locator).eq(index).check({ force });
    }   
    containsText(locator, text) {
        cy.get(locator).should('contain.text', text).click();
    }
    containsTextIndx(locator, index, text) {
        cy.get(locator).eq(index).should('contain.text', text).click();
    }
  
    clickContain(locator, input){
        cy.get(locator).contains(input).click()
    }

    waitForRequest(){
        cy.intercept('**').as('requests')
        cy.wait('@requests')
    }

    select(locator,index,item){
        cy.get(locator).eq(index).select(item)
    }
}