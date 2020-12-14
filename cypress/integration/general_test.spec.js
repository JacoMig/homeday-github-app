const root = 'http://localhost:3008'
describe('@General Layout', () => {
    it('Should click on hamburger menu and open the navigation', () => {
        cy.visit(root);
        cy.viewport(600,600);
        cy.get('.navbar-menu').should('not.be.visible');
        cy.get('.navbar-burger').click();
        cy.get('.navbar-menu').should('be.visible');
    })
})