describe('Register Test', () => {
    it('should register successfully', () => {
        // Visit the landing page
        cy.visit('http://localhost:3000');

        // Click the login button
        cy.contains('Login').click();

        // Click the register button
        cy.contains('Cadastre-se').click();

        // Fill in the registration form
        cy.get('input[placeholder="Username"]').type('newuser');
        cy.get('input[placeholder="CPF"]').type('36949412070');
        cy.get('input[placeholder="Email"]').type('newuser@example.com');
        cy.get('input[placeholder="Senha"]').type('password123');

        // Submit the registration form
        cy.contains('button', 'Cadastrar').click();

        // Check the result
        cy.url().should('include', '/login');
        cy.contains('Cadastro efetuado com sucesso!').should('be.visible');
    });

    it('should show error when inputs are empty', () => {
        // Visit the landing page
        cy.visit('http://localhost:3000');

        // Click the login button
        cy.contains('Login').click();

        // Click the register button
        cy.contains('Cadastre-se').click();

        // Submit the registration form without filling in the inputs
        cy.contains('button', 'Cadastrar').click();

        // Check for error message
        cy.contains('Todos os campos são obrigatórios').should('be.visible');
    });
});