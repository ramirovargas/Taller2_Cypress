describe('Los estudiantes Registro', function() {
    it('Visits los estudiantes and fails at login', function() {
      cy.visit('https://losestudiantes.co')
      cy.contains('Cerrar').click()
      //Lineas nuevas  
      cy.contains('Ingresar').click()
      cy.get('.cajaSignUp').find('input[name="nombre"]').click().type("Ramiro")
      cy.get('.cajaSignUp').find('input[name="apellido"]').click().type("vargas")
      cy.get('.cajaSignUp').find('input[name="correo"]').click().type("ramiro.vargassalas@gmail.com")
      cy.get('[type="checkbox"]').check()
      cy.get('div.jsx-527058112 > .form-group > div.jsx-1373336998 > .jsx-1373336998').select('Maestría en Ingeniería de Software')
      cy.get('.cajaSignUp').find('input[name="password"]').click().type("password")
      cy.get('.cajaSignUp').find('button[type="submit"]').click()

    })
})