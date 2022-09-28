/// <reference types = "Cypress"/>

describe("Segundo conjunto de pruebas", function (){
    before(function(){
        cy.fixture('example').then(function(datos){
            this.datos = datos
            cy.fixture(this.datos.imagen).as('imagen')
        })
    })

    beforeEach(()=>{
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('Llenamos nuesgtro primer forms usando data', function(){
        cy.get('#firstName').type(this.datos.nombre)
        cy.get('#lastName').type(this.datos.apellido)
        cy.get('#userEmail').type(this.datos.email)
        cy.get('input[name="gender"][value="' + this.datos.sexo +'"]').check({force:true}).should('be.checked')
        cy.get('#userNumber').type(this.datos.telefono)
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.fechaDeNacimiento[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.fechaDeNacimiento[1])
        // cy.get('.react-datepicker__month').should('be.visible').select(this.datos.fechaDeNacimiento[2])
        cy.get('.react-datepicker__day--0' + this.datos.fechaDeNacimiento[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
            .should('contain.value', this.datos.fechaDeNacimiento[0].substring(0,3))
            .should('contain.value', this.datos.fechaDeNacimiento[1])
            .should('contain.value', this.datos.fechaDeNacimiento[2])
        cy.get('.subjects-auto-complete__value-container').type(this.datos.materia)
        cy.get('div[id^="react-select-"]').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.materia)

        cy.get('.subjects-auto-complete__value-container').type("Maths")
        cy.get('div[id^="react-select-"]').click()
        // hacer lo mismo del profe pero en otra pagina web
        cy.get('#uploadPicture').then(function($el){
            // convertir la imagen a string base64
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, 'image/png')
            const file = new File([blob], this.datos.imagen, {type: 'image/png'})
            const list = new DataTransfer()
            list.items.add(file)
            const myFileList = list.files
            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', { bubbles: true }))
            
        })
        cy.get('#currentAddress').type(this.datos.direccion)
        
    })

})

Cypress.on('uncaught:exception', (err,runable) => {
    console.log("err: " + err)
    console.log("runnable :" + runable)
    return false
})