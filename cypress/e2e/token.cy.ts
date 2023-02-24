describe('TokenPage', () => {
    const url = Cypress.env('AVASCAN_TOKEN_API_URL')
    const tokenID = 8005

    it('should render the spinner while loading', () => {
        cy.visit(`token/${tokenID}`);
        cy.get('[data-cy=spinner]').should('be.visible');
    });

    it('should render the error message if an error occurs', () => {
        cy.visit(`token/${undefined}`);
        cy.get('[data-cy=error]').should('contain.text', 'Request failed with status code 404');
    });



    it('should render the token details if loaded successfully', () => {
        cy.visit(`token/${tokenID}`);

        cy.get('[data-cy=token-visualizer]').should('be.visible');
        cy.get('[data-cy=token-details]').should('be.visible');
    });
});
