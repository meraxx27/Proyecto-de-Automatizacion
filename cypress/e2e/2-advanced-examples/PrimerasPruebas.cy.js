/// <reference types="Cypress"</>

//importamos Clases de Pages Objects
import AddressPage from '../../support/PageObjects/AddressPage'
import AuthenticationPage from '../../support/PageObjects/AuthenticationPage'
import AuthenticationPage from '../../support/PageObjects/AuthenticationPage'
import HomePage from '../../support/PageObjects/HomePage'
import PaymentPage from '../../support/PageObjects/PaymentPage'
import ShippingPage from '../../support/PageObjects/ShippingPage'
import ShoppingCartSummary from '../../support/PageObjects/ShoppingCartSummarypage'
import ShoppingCartSummarypage from '../../support/PageObjects/ShoppingCartSummarypage'


//suite de casos
describe('Primer conjunto de casos de prueba', function () {
    const addressPage = new AddressPage()
    const authenticationPage = new AuthenticationPage()
    const homepage = new HomePage()
    const paymentpage = new PaymentPage()
    const shippingPage = new ShippingPage()
    const shoppingcartsummary = new ShoppingCartSummarypage()


    beforeEach(() => {
        cy.visit("http://automationpractice.com/index.php")
    })

    
    //caso de prueba 1
    // it('ingresar a la pagina principal de atenea', function(){
    //     cy.get('#homefeatured .product-container').should('have.length',7)
    //     })
    

    
    //caso de prueba 2
    // it('Agregar el elemento tipo blouse al carrito de compras desde la página principal', function () {
    //     cy.get('#homefeatured .product-container').as('ProductosPopulares')
    //     cy.get('@ProductosPopulares')
    //         .find('.product-name')
    //         .each(($el, index, $list) => {
    //             cy.get('@ProductosPopulares').eq(index).find('.price').then(function ($el1) {
    //                 let precio = $el1.text()
    //                 cy.log(precio)

    //                 if ($el.attr('title') === 'Printed Dress' && precio.includes('26.00')) {
    //                     cy.log('Se ha encontrado el elemento y precio buscado')
    //                     cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
    //                 }
    //             })

    //         })
    //     cy.get('h2 > .ajax_cart_product_txt')
    //         .should('contain.text', 'There is 1 item in your cart.')
    //         .should('be.visible')
    // })
    

    //caso de prueba 3
    // it('Verificamos que el drop-down de "Women" tenga los elementos necesarios', function(){
    //     //Flotamos sobre un elemento
    //     cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr','style','display: block')
    //     cy.get('a[title="Tops"]').should('be.visible')
    //     cy.get('a[title="T-shirts"]').should('be.visible')
    //     cy.get('a[title="Blouses"]').should('be.visible')
    //     cy.get('a[title="Dresses"]').should('be.visible')
    //     cy.get('a[title^="Casual"]').should('be.visible')
    //     cy.get('a[title^="Evening"]').should('be.visible')
    //     cy.get('a[title^="Summer"]').should('be.visible')
    // })
    // Caso de prueba 4
    // it('Verificar que los checkboxes estan funcionando'), function(){
    //     cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    //     cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
    //     cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
    //     cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
		
    // }
    // //Caso de prueba 5
    // it('verificar que los dropmenus de arreglo esten funcionando', function(){
    //     cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
    //     cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')

    // } )
    //Caso de prueba 6
    it('Crear una comprar desde cero'+ function() {
        homepage.getSearchBox().type('Blouse')
        homepage.getSearchBoxButton().click()
        homepage.getAddToCardElementButton("Blouse").click
        homepage.getProceedToCheckuotButton().click()

        shoppingcartsummary.getProductNameText().should('contain.text','Blouse')
        shoppingcartsummary.getProductPriceText().should('contain.text','27.00')
        shoppingcartsummary.getProceedToCheckoutButton().click()

        authenticationPage.getEmailAddressInput().type('cypress@ateneaconocimientos.net')
        authenticationPage.getPasswordInput().type('Atenea')
        authenticationPage.getSignInButton().click()

        paymentpage.getPayByBankWireOptionButton().click()
        paymentpage.getConfirmMyOrderButton().click()
        paymentpage.getDescriptionTittleText().should('contain.text', 'Your order on My Store')


    })

})