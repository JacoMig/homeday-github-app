const repoName = 'homeday-blocks';
const path = `http://localhost:3008/user/homeday-de/${repoName}`;
const repoApiUrl = `https://api.github.com/repos/homeday-de/${repoName}`;
const reposListApiUrl = `https://api.github.com/users/homeday-de/repos`;

describe('@RepoPage Fetch Repo API', () => {
    it('Should Fetch User Single Repo from the Url Params', () => {
        cy.intercept(repoApiUrl).as('getHomeDaySingleRepo')
        cy.visit(path);
        cy.wait('@getHomeDaySingleRepo').then(int => {
            if(int.response.statusCode === 200){
              cy.get('.repoBox').should('exist');
              cy.get('.repoBox h1').should('have.text', repoName)
              cy.get('.help').should('not.exist')
            } else if([400,403, 301, 304, 422].includes(int.response.statusCode)){
                cy.get('.repoBox').should('not.exist');
                cy.get('.help').should('exist')
            }  
        })
    })
    it('Should fetch user repos list and create next page link', () => {
        cy.intercept(reposListApiUrl).as('getHomeDayReposList')
        cy.visit(path);
        cy.wait('@getHomeDayReposList').then(int => {
            if(int.response.statusCode === 200){
                const repos = int.response.body
                const index = repos.findIndex(repo => repo.name === repoName);
                const nextRepoName = repos[index+1].name
                cy.get('.next').click();
                cy.location('pathname').should('eq', `/user/homeday-de/${nextRepoName}`)
            } else if([400,403, 301, 304, 422].includes(int.response.statusCode)){
                cy.get('.help').should('exist')
                cy.get('.next').should('be.disabled')
            }  
        })
    })
})



