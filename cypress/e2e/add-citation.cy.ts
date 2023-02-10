describe('add page', () => {

    beforeEach(() => cy.visit('http://localhost:3000/add'))
  
    it('should display homepage when access to root url', () => {
      cy.contains('h1', `Ajoutez une citation`)
    })
  })
  