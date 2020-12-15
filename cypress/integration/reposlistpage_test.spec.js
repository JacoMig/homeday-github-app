const userName = 'JacoMig';
const userEndPoint = `https://api.github.com/users/${userName}/repos`;
const path = 'http://localhost:3008/'+userName;

describe('@ReposListPage', () => {
    it('Should fetch repos list of a user', () => {
        cy.intercept(userEndPoint).as('getUserReposList')
        cy.visit(path);
        cy.wait('@getUserReposList').then(int => {
          if(int.response.statusCode === 200){
            const bodyLength = int.response.body.length
            cy.get('.box.repo').should('exist').and('have.length', bodyLength)
            cy.get('.help').should('not.exist')
          } else if([400,403, 301, 304, 422].includes(int.response.statusCode)){
            cy.get('.box.repo').should('not.exist')
            cy.get('.help').should('exist')
          }  
        })
    })
})