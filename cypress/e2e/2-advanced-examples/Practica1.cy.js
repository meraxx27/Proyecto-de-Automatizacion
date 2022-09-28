/// <reference types="Cypress"/>    
//Suite de casos que contiene cada caso 
describe('Primer conjunto de casos de prueba', function () {
  beforeEach(() => {
  // ingresamos a la pagina    
  cy.visit("https://libreria.unison.mx/libros.php")
  })
       
  //Caso de prueba 3  
  it('Verificamos que el drop down de libros, tenga los elementos necesarios', function () {
          //Flotamos sobre un elemento
          cy.get('#menu > ul > li:nth-child(1) > a').invoke('attr', 'style', 'display: block')
          .should('be.visible')
          //.invoke('attr', 'style', 'display: block')
          cy.get('#librosIzquierdaAcademicos > :nth-child(1) > a').should('be.visible') //Administracion
          cy.get('#librosIzquierdaAcademicos > p:nth-child(2) > a').should('be.visible') //Agricultura y ganaderia
          cy.get('#librosIzquierdaAcademicos > :nth-child(3) > a').should('be.visible') //arquitectura
          cy.get('#librosIzquierdaAcademicos > p:nth-child(4) > a').should('be.visible') //artes y musica
          cy.get('#librosIzquierdaAcademicos > p:nth-child(5) > a').should('be.visible')
      }) 


  //caso de prueba 2
  it('Seleccionar el libros y verificar el precio y el nombre ', function () {
    //Creacion de variables de busqueda para que sea mas eficiente el modificar el libro con el precio a buscar.
    let $libro_buscar = ' NEGOCIOS GLOBALES '
    let $precio_buscar = '$580.00 MXN'
    cy.get('#librosIzquierdaAcademicos > :nth-child(1) > a').as('Libro')
      //Iteramos para encontrar un producto con nombre X  
      cy.get('@Libro').click()
      //Se seleccionan todos los libros disponibles para poder iterar uno por uno.
      cy.get('.product-item > .thumbsProductos > a > img')
        .each(($libro, $index, $list) => {
          //Por cada libro, se obtiene el precio de ese especifico libro.
          //NOTA: Aqui se utilizo el index del libro que se esta iterando para buscar solamente el precio de ese mismo libro. 
          //NOTA 2: se utilizo la funcion then para poder buscar el precio de ese especifico libro, para guardarlo como variable y asi poder compararlo.
          cy.get(':nth-child('+(++$index)+') > .product-item > .product-item-details > .precio > .price').then(($precio) => {
            //Se compara si el libro seleccionado es igual al nombre con el respectivo precio de ese mismo libro.
            if ($libro.attr('title') === $libro_buscar && $precio.text().includes($precio_buscar)) {
              cy.log('Se ha encontrado el elemento con el precio buscado')
              //cy.log('Se ha encontrado el precio buscado')
            } else {
              cy.log('NO se ha encontrado el elemento con el precio buscado')   

            }
          })                 
        })
  })          
})