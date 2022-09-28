/// <reference types="Cypress"/>    

// Suite de casos de prueba avanzados
describe("Segundo conjunto de pruebas", function (){
    before(function(){
        cy.fixture('example').then(function(datos){
            this.datos = datos
        })
    })
    beforeEach(()=>{
        cy.visit('https://www.teleperformance.mx/RafTool')
    })
    it('Llenamos nuesgtro primer forms usando data', function(){
        cy.visit('https://www.teleperformance.mx/RafTool')
        cy.get('#username').type('merazvilla.5')
        cy.get('#password').type('Salchipapa.1')
        cy.get('.btn').click()
        cy.get('.col-lg-offset-4 > a > div').click()
        cy.get('#PrimerNombre').type(this.datos.name)
        cy.get('#PrimerApellido').type(this.datos.apellido)
        cy.get('#TelefonoFijo').type(this.datos.telefono)
        // cy.get(':nth-child(22) > .form-group-sm > .input-group > .checkbox').check({force:true}).should('be.checked')
        // cy.get('.k-picker-wrap > .k-select').click()
        //div.form-group-sm:nth-child(20) > div:nth-child(2) > div:nth-child(2) > label:nth-child(1) > span:nth-child(2) > i:nth-child(1)
        cy.get('#extranjero').check({force: true} ).should('be.checked')
        cy.get('.k-picker-wrap > span:nth-child(2)').click()
        

    })

})
Cypress.on('uncaught:exception', (err,runable) => {
    console.log("err: " + err)
    console.log("runnable :" + runable)
    return false
})



// cy.visit("https://www.seleniumeasy.com/test/table-search-filter-demo.html")
// cy.get("tr td:nth-child(2)")       //Gets the 2nd child in td column
//   .eq(1)                        //Yields second matching css element 
//   .contains("sometext")
//   .should('be.visible')