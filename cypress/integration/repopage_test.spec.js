const repoName = 'homeday-blocks';
const path = `http://localhost:3008/homeday-de/${repoName}`;
const repoApiUrl = `https://api.github.com/repos/homeday-de/${repoName}`;

describe('@RepoPage Fetch Repo API', () => {
    it('Should Fetch User Single Repo from the Url Params', () => {
        cy.intercept(repoApiUrl).as('getHomeDaySingleRepo')
        cy.visit(path);
        cy.wait('@getHomeDaySingleRepo').then(int => {
            if(int.response.statusCode === 200){
              cy.get('.repoBox').should('exist');
              cy.get('.repoBox h1').should('have.text', repoName)
              cy.get('.help').should('not.exist');
            } else if([400,403, 301, 304, 422, 404].includes(int.response.statusCode)){
                cy.get('.repoBox').should('not.exist');
                cy.get('.help').should('exist')
            }  
        })
    })
    
})



