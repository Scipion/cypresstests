describe('Load Wiki Mainpage', () => {
    it('Prints properly', () => {
        cy.visit('https://en.wikipedia.org')
        cy.contains('wiki')
        cy.url().should('include', 'Main_Page')
    });

    it('About is printed properly', () => {
        cy.visit('https://en.wikipedia.org')
        cy.contains('About Wikipedia').click()
        cy.contains('Wikipedia:About')
        cy.url().should('include', 'About')
    });

    it('Searches "Ethereum" pressing enter', () => {
        cy.visit('https://en.wikipedia.org')
        cy.get('#searchInput')
            .type('Ethereum')
            .type('{enter}');
        cy.get('#firstHeading').should(($fh) => {
            expect($fh).to.contain('Ethereum')
        })
    });
});