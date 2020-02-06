describe('Los estudiantes login y exploracion', function() {
  it('Visits los estudiantes and fails at login', function() {
    cy.visit('https://losestudiantes.co')
    cy.contains('Cerrar').click()
    //Lineas nuevas  
    cy.contains('Ingresar').click()
    cy.get('.cajaLogIn').find('input[name="correo"]').click().type("ramiro.vargassalas@gmail.com")
    cy.get('.cajaLogIn').find('input[name="password"]').click().type("password")
    cy.get('.cajaLogIn').contains('Ingresar').click()
    // Buscar un profesor
    cy.get('.nav > :nth-child(1)').find('input').click({ force: true }).type("mario linares",{ force: true })
    cy.get('#react-select-required_error_checksum--option-0').click()
    cy.get(':nth-child(5) > .labelHover > input.jsx-1802368871').check()
  })
})