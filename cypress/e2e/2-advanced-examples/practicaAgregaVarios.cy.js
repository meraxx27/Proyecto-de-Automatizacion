/// <reference types = "Cypress"/>
describe('Tercer feacture de casos avanzados', function(){
    beforeEach(()=>{
        cy.fixture('CarritosdeCompras').then(function(datos){
            this.datos = datos
        })
        //Ingresar a ala pagina de compra de articulos tecnologicos
        //#product-list > div:nth-child(1) > form > div > div.content > div.button-group > button:nth-child(1)
        cy.visit("https://tiendapanini.com.mx/coleccionables/fifa-world-cup")
        //https://tiendapanini.com.mx/coleccionables/fifa-world-cup
        


    })
})