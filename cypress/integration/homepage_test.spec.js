const homedayEndPoint = `https://api.github.com/users/homeday-de/repos`;
const root = 'http://localhost:3008'

describe('@HomePage Layout', () => {
  it('Should prev button not be in the dom', () => {
    cy.visit(root);
    cy.get('.prev').should('not.exist');
  })
  it('Should click Fetch Button and go to "/search" page', () => {
    cy.visit(root);
    cy.get('.fetch-button').click();
    cy.location('pathname').should('eq', `/search`);
  }) 
}) 

describe("@HomePage Fetch API from Homeday", () => {
  beforeEach(() => {
    cy.intercept(homedayEndPoint).as('getHomeDayRepo')
    cy.visit(root);
  })
  it('Fetch Api From HomeDay', () => {
      cy.wait('@getHomeDayRepo').then(int => {
        if(int.response.statusCode === 200){
          cy.get('.box.repo').should('exist').and('have.length', 3)
          cy.get('.help').should('not.exist')
        } else if([400,403, 301, 304, 422, 404].includes(int.response.statusCode)){
          cy.get('.box.repo').should('not.exist')
          cy.get('.help').should('exist')
        }  
      })
  })
  it('Should go to Repo View if clicking on Repo Item', () => {
    cy.wait('@getHomeDayRepo').then(int => {
      if(int.response.statusCode === 200){
        cy.get('.box.repo').should('exist').and('have.length', 3);
        cy.get('.box.repo').first()
        .invoke('attr', 'href')
        .then(href => {
          cy.visit(`${root}${href}`);
        });
      }  
    })
  })
})


