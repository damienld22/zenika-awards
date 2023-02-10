describe('homepage', () => {

  beforeEach(() => cy.visit('http://localhost:3000'))

  it('should display homepage when access to root url', () => {
    cy.contains('h1', `Classement des meilleures citations entendues chez Zenika`)
  })
})
