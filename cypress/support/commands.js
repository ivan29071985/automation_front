Cypress.Commands.add('setupAndLogin', (email = 'ivan.santos+1@amorsaude.com', password = 'Iv@n198529') => {
  const sessionVersion = 'v3';
  const sessionId = `login_${email}_${sessionVersion}_${Date.now()}`; // Adicionei timestamp único

  const environment = Cypress.env('environment') || Cypress.env('CYPRESS_ENV');
  const baseUrl = environment === 'staging'
    ? Cypress.env('baseUrl').staging
    : environment === 'producao' || environment === 'prod'
      ? Cypress.env('baseUrl').producao
      : Cypress.env('baseUrl').homologacao;

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

    // Salvar token em localStorage, se necessário
    cy.get('#schedule', { timeout: 10000 }).should('exist');
  }, {
    validate: () => {
      // Verifica se está autenticado via localStorage ou cookie (ajuste conforme necessário)
      cy.window().then(win => {
        const isLoggedIn = Boolean(win.localStorage.getItem('user') || win.localStorage.getItem('auth_token'));
        expect(isLoggedIn).to.be.true;
      });
    },
    cacheAcrossSpecs: false // Mudei para false para evitar conflitos
  });
});

// Tratamento global para erros não capturados
Cypress.on('uncaught:exception', (err, runnable) => {
  // Se for o erro de unshift, vamos ignorar para que o teste continue
  if (err.message.includes("Cannot read properties of undefined (reading 'unshift')")) {
    console.log('Erro de unshift detectado e ignorado');
    return false;
  }
  // Para outros erros, deixamos o Cypress decidir
  return true;
});

//*********************************************************************/

Cypress.Commands.add('loginDrBarros', () => {
  // Criando um ID de sessão personalizado com timestamp atual
  const sessionId = `sessao_drbarros_${Date.now()}`; // Mudei o nome para ser mais específico

  const environment = Cypress.env('environment') || Cypress.env('CYPRESS_ENV');
  const baseUrl = environment === 'staging'
    ? Cypress.env('baseUrl').staging
    : environment === 'producao' || environment === 'prod'
      ? Cypress.env('baseUrl').producao
      : Cypress.env('baseUrl').homologacao;

  Cypress.env('currentBaseUrl', baseUrl);

  cy.session(sessionId, () => {
    const currentBaseUrl = Cypress.env('currentBaseUrl');
    cy.wait(500)
    cy.visit(`${currentBaseUrl}`);
    cy.get('#E-mail').type('ivan.santos+drbarros@amorsaude.com');
    cy.get('#Senha').type('Iv@n198529', { log: false });
    cy.contains('Entrar', { timeout: 1000 }).click();
    cy.contains('span', /Automação (Staging|Homolog|Prod)/, { timeout: 10000 }).click({ force: true });
    cy.contains('button', ' Entrar ', { timeout: 10000 }).click();

    // Correção para o tratamento do botão Ok
    cy.get('body').then($body => {
      if ($body.text().includes('Você não tem permissão')) {
        cy.contains('button', 'Ok').click();
      }
    });

    // Verifica se a mensagem de erro de permissão aparece e clica em OK
    cy.get('body').then($body => {
      // Verifica se o texto da mensagem de erro está presente em qualquer lugar na página
      if ($body.text().includes('Você não tem permissão para a rota Home')) {
        // Clica no botão OK para fechar o modal
        cy.contains('button', 'Ok').click();
        cy.log('Mensagem de erro de permissão tratada com sucesso');
      }
    });

  }, {
    cacheAcrossSpecs: false // Adicionei esta configuração
  });

  // Log para confirmar a criação do ID de sessão
  cy.log(`Sessão criada com ID: ${sessionId}`);
});