class ShippingPage{
    getTermsOfService(){
    return cy.get('#cgv')
    }
    getProceedToCheckoutButton(){
    return cy.get('.cart_navigation > .button')
    }
}
export default ShippingPage;