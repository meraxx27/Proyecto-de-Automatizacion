/// <reference types="Cypress"/>    
//Suite de casos que contiene cada caso 
describe('Primer conjunto de casos de prueba', function () {
    beforeEach(() => {
    // ingresamos a la pagina    
    cy.visit("http://automationpractice.com/index.php")
    })
         
    
    //Caso de prueba 1  
  /*  it('Contabilizar la cantidad de elementos en la seccion de pagina principal', function () {
            
         //Veificar la cantidad de elementos visibles   
               cy.get('#homefeatured .product-container').should('have.length', 7)
                    //Obtenemos el elemento homefeatured .product-container como un parametro   
                    cy.get('#homefeatured .product-container').as('ProductosPopulares')
                    //Verificamos nuevamente la cantidad de elementos utilizando el parametro   
                    cy.get('@ProductosPopulares').should('have.length', 7)
                })
            
                //Caso de prueba 2  
 	        it('Agregar el elemento de tipo "Printed Dress" al carrito de compra desde la pagina principal', function () {
                //Obtenemos el elemento homefeatured .product-container como un parametro   
                cy.get('#homefeatured .product-container').as('ProductosPopulares')
                //Iteramos para encontrar un producto con nombre X  
                cy.get('@ProductosPopulares')                    .find('.product-name')                        .each(($el, index, $list) => {

                         cy.get('@ProductosPopulares').eq(index).find('.price').then(function ($el1) {
                            let precio = $el1.text()
                            cy.log(precio)
        
                            if ($el.attr('title') === 'Printed Dress' && precio.includes('50.99')) {
                                cy.log('Se ha encontrado el elemento buscado')
                                cy.log('Se ha encontrado el precio buscado')
                                cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                                }
                            })
            
                        })
                cy.get('h2 > .ajax_cart_product_txt')
                    .should('contain.text', 'There is 1 item in your cart.')
                  //  .should('be.visible')
                })
            */
            //Caso de prueba 3  
            /*it('Verificamos que el drop down de women, tenga los elementos necesarios', function () {
         
                //Flotamos sobre un elemento
                cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr', 'style', 'display: block')
                cy.get('a[title="Tops"]').should('be.visible')
                cy.get('a[title="T-shirts"]').should('be.visible')
                cy.get('a[title="Blouses"]').should('be.visible')
                cy.get('a[title="Dresses"]').should('be.visible')
                cy.get('a[title^="Casual"]').should('be.visible')
                cy.get('a[title^="Evening"]').should('be.visible')
                cy.get('a[title^="ADMINISTRACION  UN ENFOQUE BASADO EN COMPETENCIAS"]').should('be.visible')
            })*/ 
    //caso de pruebas 4
   // it('Verificar que los checkboxes estan funcionando'), function(){
    //    cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
      //  cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        //cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        //cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
		
    //}

    //Caso de prueba 5
   // it('verificar que los dropmenus de arreglo esten funcionando', function(){
     //   cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
       // cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')
        //} )
        
    //caso de prueba 6
    it('crear una compra desde cero', function(){
        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > button').click()

        cy.get('.right-block > h5 > .product-name').should('be.visible')
        cy.get('.ajax_add_to_cart_button > span').click()

        cy.wait(8000)
        cy.get('.button-container > .button-medium > span').click()

        cy.get('.cart_description > .product-name > a').should('be.visible')
        cy.get('#product_price_2_7_0 > .price').should('be.visible')
        cy.get('.cart_navigation > .button > span').click()

        cy.get('#email').type('correofalso@hotmail.com')
        cy.get('#passwd').type('correofalsocontra')
        cy.get('#SubmitLogin > span').click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('#cgv').check()
        cy.get('.cart_navigation > .button > span').click()
        
        cy.get('.bankwire').click()

        cy.get('#cart_navigation > .button > span').click()

        cy.get('.cheque-indent > .dark').should('contain.text','Your order on My Store is complete.')


    })
    
        })