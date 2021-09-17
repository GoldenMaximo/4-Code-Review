/// <reference types="cypress" />

context('E2E', () => {
    describe('Single pass through the entire app', () => {
        it('Should search for node then search for react then go back to the home screen', () => {
            cy.intercept({
                method: 'GET',
                url: `${Cypress.env('githubSearchEndpoint')}*`,
            }).as('githubSearchEndpoint');

            cy.intercept({
                method: 'GET',
                url: `${Cypress.env('nasaPlanetaryEndpoint')}*`,
            }).as('nasaPlanetaryEndpoint');

            cy.visit(`http://localhost:${Cypress.env('port')}/`);

            cy.get('input').type('node').should('have.value', 'node');

            cy.get('button').click();

            cy.url().should('include', '/search?repository-name=node');

            cy.get('.ant-page-header-heading-title').contains('node');

            cy.wait('@githubSearchEndpoint').then(interception => {
                assert.isNotNull(interception.response.body, '1st API call has data');

                cy.get('.ant-list li').first().get('a').contains('node');
            });

            cy.wait('@nasaPlanetaryEndpoint').then(interception => {
                assert.isNotNull(interception.response.body, '2nd API call has data');

                expect(cy.get('.ant-list li').first('img')).to.exist;
            });

            cy.get('.ant-pagination li').eq(2).click();

            cy.wait('@githubSearchEndpoint').then(interception => {
                assert.isNotNull(interception.response.body, '3rd API call has data');

                cy.get('.ant-list li').first().get('a').contains('node');
            });

            cy.wait('@nasaPlanetaryEndpoint').then(interception => {
                assert.isNotNull(interception.response.body, '4th API call has data');

                expect(cy.get('.ant-list li').first('img')).to.exist;
            });

            cy.get('input.ant-input').type('react').should('have.value', 'react').type('{enter}');

            cy.url().should('include', '/search?repository-name=react');

            cy.get('.ant-page-header-heading-title').contains('react');

            cy.wait('@githubSearchEndpoint').then(interception => {
                assert.isNotNull(interception.response.body, '5th API call has data');

                cy.wait(200).get('.ant-list li').first().get('a').contains('react');
            });

            cy.get('[aria-label="home"]').parent().click();

            cy.url().should('not.include', '/search');
        });
    });
});
