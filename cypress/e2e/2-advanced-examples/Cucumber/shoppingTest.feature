Feature: Primer conjunto de casos de prueba de pagina de compras

    Este feature esta siendo adaptado desde un formato de pom hacia cucumber
    
    Scenario: Crear una compra desde cero
    Given el usuario se encuentra en la pagina de compra
    And busca un articulo llamada blusa
    When agregar una blusa al carrito
    Then el valir del articulo es de 27.00 dolares
    When Finaliza la compra de los articulos
    Then el mensaje de orden completada deberia aparecer 