/// <reference types = "Cypress"/>

// const { groupBy } = require("cypress/types/lodash")

// Suit de casos de pruebas avanzadas 
describe('Tercer feacture de casos avanzados', function(){
    beforeEach(()=>{
        cy.fixture('CarritosdeCompras').then(function(datos){
            this.datos = datos
        })
        //Ingresar a ala pagina de compra de articulos tecnologicos
        //#product-list > div:nth-child(1) > form > div > div.content > div.button-group > button:nth-child(1)
        cy.visit("https://demo.opencart.com/index.php")

    })

    //Caso 7
    it('Realizar compra de celulares basada en su titulo',function(){
        cy.get("#menu ul a:contains('Phones & PDAs')").click()
        //div[class='product-thumb']:has(.caption):contains(HTC Touch HD) Button[onclick^='cart.add']
        //cy.get()
        cy.get("div[class='product-thumb']").as("contenedorDeProductos")
        cy.get("@contenedorDeProductos")
        .each(($el, index, $list) => {

            cy.get(':has(.description) h4 a').eq(index).then(function ($el1){
                let producto = $el1.text()
                cy.log(producto)

                if (producto.includes(this.datos.telefono1)) {
                    cy.log('Se ha encontrado el elemento buscado')
                    cy.get('@contenedorDeProductos').eq(index).find("button[onclick^='cart.add']").click()
                }
            })
            cy.get(':has(.description) h4 a').eq(index).then(function ($el1){
                let producto = $el1.text()
                cy.log(producto)

                if (producto.includes(this.datos.telefono2)) {
                    cy.log('Se ha encontrado el elemento buscado')
                    cy.get('@contenedorDeProductos').eq(index).find("button[onclick^='cart.add']").click()
                }
            })
            cy.get(':has(.description) h4 a').eq(index).then(function ($el1){
                let producto = $el1.text()
                cy.log(producto)

                if (producto.includes(this.datos.telefono3)) {
                    cy.log('Se ha encontrado el elemento buscado')
                    cy.get('@contenedorDeProductos').eq(index).find("button[onclick^='cart.add']").click()
                }
            })
        })
    })
    Cypress.Commands.add("AgregarElementosAlCarrito",(nombreDeProducto)=>{
     cy.get("div[class='product-tumb']").as("contenedoresDeProductos")
     
     cy.get("@contenedoresDeProductos")
     .each(($el, index, $list) =>{
        cy.get(":has(.caption) h4 a").eq(index).then(function ($el1){
            let producto = $el1.text()
            cy.log
        })        
     })
    })
})
    Cypress.on('uncaught:exception', (err,runable) => {
        console.log("err: " + err)
        console.log("runnable :" + runable)
        return false
})

 // npm install --save-dev cypress-cucumber-preprocessor