/// <reference types="Cypress"/>    


describe('Primer examen ', function(){

    beforeEach(() => {
        cy.visit("https://www.telcel.com/")
    })
    it('Ingresamos a la pagina', function () {
        //cy.get("mdc-select").contains("installation type").click();
// try to access ITEM1
        cy.get('#menu-principal').invoke('attr', 'style', 'display: block')
//cy.get('#telcel-menu-principal-boton').click({force:true})
        cy.get('#level-1 > li:nth-child(2)').should('be.visible')
        cy.get('#level-1 > li:nth-child(3)').should('be.visible').click()
        cy.get('body > div.principal.responsivegrid > div > div > div > article:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(1) > a > img').click()
        cy.get('#marca_nocliente_chosen > a').click()
        cy.get('[data-option-array-index="26"]').click()
        cy.get('#entrarPerfilador').click()
        // cy.get('.chosen-single').select("Sonora")
        // cy.get('#entrarPerfilador').click()
        //#marca_nocliente_chosen > a
        // cy.get('select[id="marca_nocliente"]').select('2').should('have.value', '2').click()
        //#marca_nocliente_chosen

        
    })
})
Cypress.on('uncaught:exception', (err,runable) => {
    console.log("err: " + err)
    console.log("runnable :" + runable)
    return false
})