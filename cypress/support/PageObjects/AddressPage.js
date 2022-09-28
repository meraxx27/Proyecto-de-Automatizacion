class AddressPage{
    getProceedToCheckoutButton(){
        return cy.get('.cart-navigation > .button')
    }
}
export default AddressPage;