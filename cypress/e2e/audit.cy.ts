describe('audit', () => {

    beforeEach(() => cy.visit('http://localhost:3000'))

    it('lighthouse', async () => {
        await cy.lighthouse(null, { output: 'html' })
    })
})
