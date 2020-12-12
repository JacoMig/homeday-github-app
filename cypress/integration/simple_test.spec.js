const userVal = 'JacoMig';
const userEndPoint = 'https://api.github.com/users/';
/* describe('@HomePage Layout', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
    it('page has logo img', () => {
        cy.get('.App-logo').should('have.attr', 'src').and('match', /logo/)
    })
    it('Link go to react.js website', () => {
        cy.get('.App-link').should('have.attr', 'href', 'https://reactjs.org')
    })
    it('Test input type', () => {
        cy.get('input[type=text]').type(userVal).should('have.value', userVal)
    })
    
}) */

describe("@HomePage Fetch API", () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    })
    it('Fetch Api Error 404', () => {
      let message = 'Not Found'
      cy.intercept(userEndPoint).as('getUser')
      cy.get('button[type=submit]').click();
      cy.wait('@getUser').then((interc) => expect(interc.response.statusCode).to.eq(404))
      cy.get('.error-message').should('have.text', message)
    })
    it('Fetch Api with Input Val as UserName', () => {
      cy.get('input[type=text]').type(userVal);
      cy.intercept(`${userEndPoint}*`).as('getUser'); 
      cy.get('button[type=submit]').click();
      cy.wait('@getUser').then((interc) => expect(interc.response.statusCode).to.eq(200))
    })
})