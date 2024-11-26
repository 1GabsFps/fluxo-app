describe('Login Test', () => {
    it('should login successfully', () => {
        // Visit the landing page
        cy.visit('http://localhost:3000');

        // Click the login button
        cy.contains('Login').click();

        // Fill in the login form
        cy.get('input[placeholder="CPF"]').type('12345678909');
        cy.get('input[placeholder="Senha"]').type('securepassword');

        // Submit the login form
        cy.contains('button', 'Login').click();

        // Check the result
        cy.url().should('include', '/home');
        cy.getCookie('token').should('exist');
    });

    it('should show error when inputs are empty', () => {
        // Visit the landing page
        cy.visit('http://localhost:3000');

        // Click the login button
        cy.contains('Login').click();

        // Submit the login form without filling in the inputs
        cy.contains('button', 'Login').click();

        // Check for error message
        cy.contains('CPF e senha são obrigatórios').should('be.visible');
    });

    it('should show error for incorrect password', () => {
        // Visit the landing page
        cy.visit('http://localhost:3000');

        // Click the login button
        cy.contains('Login').click();

        // Fill in the login form with incorrect password
        cy.get('input[placeholder="Cpf"]').type('12345678909');
        cy.get('input[placeholder="Senha"]').type('wrongpassword');

        // Submit the login form
        cy.contains('button', 'Login').click();

        // Check for error message
        cy.contains('CPF ou senha incorretos.').should('be.visible');
    });
});