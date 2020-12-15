const rootPath = 'http://localhost:3008';
const page = rootPath+'/search';
const userVal = 'JacoMig';
const emailVal = 'jaco@alice.it'

describe('@Search Page Layout', () => {
    beforeEach(() => {
        cy.visit(page);
    })

    it('Should Form exist and next button shold be disabled', () => {
        cy.get('.email input[type=text]').should('exist');
        cy.get('.name input[type=text]').should('exist');
        cy.get('.agree input[type=checkbox]').should('exist');
        cy.get('button[type=submit]').should('exist');
        cy.get('.next').should('be.disabled');
    })

    it('Should form not be valid if email is not correct', () => {
        cy.get('.email input[type=text]').type('jaco.alice.it' || 'jacoalice.it');
        cy.get('button[type=submit]').click();
        cy.get('.email .help').should('exist')
    })

    it('Should form not be valid if all fields are not fullfilled', () => {
        cy.get('button[type=submit]').click();
        cy.get('.help').should('have.length', 3)
    })

    it('Should Form Be Valid and next button should be abled', () => {
        cy.get('.email input[type=text]').type(emailVal);
        cy.get('.name input[type=text]').type(userVal);
        cy.get('.agree input[type=checkbox]').click();
        cy.get('.next').should('not.be.disabled');
        cy.get('.help').should('not.exist');
    }) 
/* 
    it('Should change route to /:UserName on Submit Form', () => {
        cy.get('.email input[type=text]').type(emailVal);
        cy.get('.name input[type=text]').type(userVal);
        cy.get('.agree input[type=checkbox]').click();
        cy.get('button[type=submit]').click();
        cy.location('pathname').should('eq', `/${userVal}`)
    }) */
    
    it('Should change route to /:UserName on Clicking Next Button', () => {
        cy.get('.email input[type=text]').type(emailVal);
        cy.get('.name input[type=text]').type(userVal);
        cy.get('.agree input[type=checkbox]').click();
        cy.get('.next').click();
        cy.location('pathname').should('eq', `/${userVal}`)
    })



  
})