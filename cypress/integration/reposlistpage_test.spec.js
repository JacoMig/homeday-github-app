const userName = 'JacoMig';
const userEndPoint = `https://api.github.com/users/${userName}/repos`;
const path = 'http://localhost:3008/'+userName;

let makeSecondCall = true
describe('@ReposListPage Fetch repos if a user exists', () => {
  it(' Fetch user', () => {
    cy.intercept(`https://api.github.com/users/${userName}`).as('getUser')
    cy.visit(path);
    cy.wait('@getUser').then(int => {
      if(int.response.statusCode === 200){
          makeSecondCall = true
        } else if([400,403, 301, 304, 422, 404].includes(int.response.statusCode)){
          makeSecondCall = false

      }
    })
  })
    it('Should fetch repos list only if a user exists', () => {
        if(makeSecondCall){
          cy.intercept(userEndPoint).as('getUserReposList')
          cy.visit(path);
          cy.wait('@getUserReposList').then(int => {
            if(int.response.statusCode === 200){
              const bodyLength = int.response.body.length
              cy.get('.box.repo').should('exist').and('have.length', bodyLength)
              cy.get('.help').should('not.exist')
            } else if([400,403, 301, 304, 422, 404].includes(int.response.statusCode)){
              cy.get('.box.repo').should('not.exist')
              cy.get('.help').should('exist')
            }  
          })
        }else {
          cy.visit(path);
        }
        
    })
})