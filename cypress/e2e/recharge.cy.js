// Import the cypress-xpath plugin at the top of the file
import 'cypress-xpath';

describe('Teste de Recarga de Cartão', () => {
    it('deve fazer login, selecionar cartão, inserir valor e proceder para pagamento', () => {
        // Visitar a página inicial
        cy.visit('http://localhost:3000');

        // Clicar no botão de login
        cy.contains('Login').click();

        // Preencher o formulário de login
        cy.get('input[placeholder="CPF"]').type('12345678909');
        cy.get('input[placeholder="Senha"]').type('securepassword');

        // Enviar o formulário de login
        cy.contains('button', 'Login').click();

        // Verificar o resultado
        cy.url().should('include', '/home');
        cy.getCookie('token').should('exist');

        // Navegar para a página de recarga de cartão
        cy.contains('Visualizar').click();

        // Selecionar um cartão
        cy.get('div[class="sc-FFETS dlgQPo"]').first().click();

        // Inserir o valor a ser adicionado
        cy.get('input[placeholder="Quantia"]').type('50');

        // Inserir o email
        cy.get('input[placeholder="Email"]').type('user@example.com');

        // Interceptar a requisição de rede que aciona o redirecionamento
        cy.intercept('POST', 'http://127.0.0.1:8000/recarregar/').as('rechargeRequest');

        // Enviar o formulário de pagamento
        cy.contains('button', 'Pagar').click();

        // Esperar a requisição de recarga ser concluída e obter initPoint
        cy.wait('@rechargeRequest').then((interception) => {
            const initPoint = interception.response.body.init_point;
            expect(initPoint).to.exist;
            cy.visit(initPoint);
        });

        // Lidar com ações no domínio do Mercado Pago
        cy.origin('https://sandbox.mercadopago.com.br', { args: {} }, () => {
            cy.wait(5000); // Esperar o carregamento do site
            cy.contains('Button', 'Cartão de crédito').click();
            cy.wait(5000); // Esperar a animação do botão

            // Preencher os dados do cartão
            cy.get('body > div.andes-window__layer > div > div > div > div > div > div > div > div > div.andes-card > form > div.group.form > div.group.form.group_form > div.card > div.andes-form-control > div.andes-form-control__field > input#cardNumber').type('4111111111111111');
            cy.get('input[data-checkout="cardholderName"]').type('John Doe');
            cy.get('input[data-checkout="cardExpirationMonth"]').type('12');
            cy.get('input[data-checkout="cardExpirationYear"]').type('25');
            cy.get('input[data-checkout="securityCode"]').type('123');

            // Enviar pagamento (se aplicável)
            cy.contains('button', 'Pagar').click(); // Ajustar com base no texto real do botão

            // Verificar sucesso do pagamento (ajustar verificação de URL com base nos critérios reais de sucesso)
            cy.url().should('include', 'success'); // Substituir 'success' pela parte real da URL de sucesso
            cy.contains('Pagamento realizado com sucesso').should('be.visible');
        });
    });
});