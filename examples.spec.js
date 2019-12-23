describe('The Home Page', function() {
    it('calculates savings', function() {
      cy.visit('http://localhost:3000/fuel-savings')

      cy.get('input[name=newMpg]').type('1243')
      cy.get('input[name=tradeMpg]').type('123')
      cy.get('input[name=newPpg]').type('123')
      cy.get('input[name=tradePpg]').type('123')
      cy.get('input[name=milesDriven]').type('12')

      cy.get('.savings:eq(0)').should('contain', '$46.85')
      cy.get('.savings:eq(1)').should('contain','$562.20')
      cy.get('.savings:eq(2)').should('contain', '$1,686.60')
      cy.get('.savings:eq(0)').should('have.css', 'color', 'rgb(96, 176, 68)')
      cy.get('.savings:eq(1)').should('have.css', 'color', 'rgb(96, 176, 68)')
      cy.get('.savings:eq(2)').should('have.css', 'color', 'rgb(96, 176, 68)')
    })


    it('calculates loss', function() {
      cy.visit('http://localhost:3000/fuel-savings')

      cy.get('input[name=newMpg]').type('123')
      cy.get('input[name=tradeMpg]').type('1243')
      cy.get('input[name=newPpg]').type('123')
      cy.get('input[name=tradePpg]').type('123')
      cy.get('input[name=milesDriven]').type('12')

      cy.get('.loss:eq(0)').should('contain', '$-46.85')
      cy.get('.loss:eq(1)').should('contain','$-562.20')
      cy.get('.loss:eq(2)').should('contain', '$-1,686.60')
      cy.get('.loss:eq(0)').should('have.css', 'color', 'rgb(255, 0, 0)')
      cy.get('.loss:eq(1)').should('have.css', 'color', 'rgb(255, 0, 0)')
      cy.get('.loss:eq(2)').should('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('shows message "Type only Numbers" when letters are entered', function(){
        cy.visit('http://localhost:3000/fuel-savings')

      cy.get('input[name=newMpg]').type('abc')
      cy.get('input[name=tradeMpg]').type('abc')
      cy.get('input[name=newPpg]').type('abc')
      cy.get('input[name=tradePpg]').type('abc')
      cy.get('input[name=milesDriven]').type('aaa')

      cy.contains('Type only Numbers')
    })
  })
