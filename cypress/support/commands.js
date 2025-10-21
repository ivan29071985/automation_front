Cypress.Commands.add('setupAndLogin', (email = 'ivan.santos+1@amorsaude.com', password = 'Iv@n198529') => {
  const sessionVersion = 'v3';
  const sessionId = `login_${email}_${sessionVersion}_${Date.now()}`;

  const baseUrl = Cypress.config('baseUrl'); // ✅ Corrigido

  Cypress.env('currentBaseUrl', baseUrl);

  cy.session(sessionId, () => {
    cy.visit(baseUrl);

    cy.get('#E-mail').type(email, { timeout: 30000 });
    cy.get('#Senha').type(password, { log: false, timeout: 30000 });
    cy.contains('Entrar', { timeout: 1000 }).click();
    cy.wait(500);

    cy.contains('span', /Automação (Staging|Homolog|Prod)/, { timeout: 10000 }).click({ force: true });
    cy.contains('button', ' Entrar ', { timeout: 10000 }).click();
    cy.wait(500);

    cy.get('body').then($body => {
      if ($body.text().includes('Você não tem permissão')) {
        cy.contains('button', 'Ok').click();
      }
      if ($body.text().includes('Você não tem permissão para a rota Home')) {
        cy.contains('button', 'Ok').click();
        cy.log('Mensagem de erro de permissão tratada com sucesso');
      }
    });

    cy.get('#schedule', { timeout: 10000 }).should('exist');
  }, {
    validate: () => {
      cy.window().then(win => {
        const isLoggedIn = Boolean(win.localStorage.getItem('user') || win.localStorage.getItem('auth_token'));
        expect(isLoggedIn).to.be.true;
      });
    },
    cacheAcrossSpecs: false
  });
});
