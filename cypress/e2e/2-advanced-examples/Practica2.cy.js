/// <reference types="Cypress"/>    
//Suite de casos que contiene cada caso 
describe('Primer conjunto de casos de prueba', function(){

    beforeEach(() => {
        //ingresamos a la pagina
        // cy.visit("https://www.gandhi.com.mx/#")
    })

    it('verificar que los checkboxes estan funcionando',function(){
        cy.visit("https://www.gandhi.com.mx/libros-electronicos")
        cy.get('#narrow-by-list > :nth-child(4)').click()
        cy.get('li[class="item"]:has(a[href*="https://www.gandhi.com.mx/libros-electronicos?language=Espa%C3%B1ol"]) input').check({force:true})
         //https://www.gandhi.com.mx/libros-electronicos?language=Espa%C3%B1ol"
        //  cy.get(':nth-child(4) > .filter-options-title')
        // cy.get('.ammenu-main-container > .ammenu-items > .nav-2 > .ammenu-link').click()    
        // cy.get(':nth-child(1) > .custom-item-megamenu-main > .widget > a > span').click()   
        // cy.get(':nth-child(3) > .filter-options-title').click()
        // cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        // cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        // cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        // cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
    })
})