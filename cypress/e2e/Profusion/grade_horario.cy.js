/// <reference types= "cypress" /> 
/// <reference types="cypress-xpath" />

describe('Grade do Profissional', () => {
    beforeEach(() => {
        /*cy.clearAllCookies()
          cy.setupAndLogin(); // Usa o comando customizado*/ // **
        cy.visit('/')
        cy.setupAndLogin()
    });

//     it('Validar fluxo de abertura de grade do profissional 1', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(5000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()
//         //cy.pause()
//         cy.contains('button', 'Incluir').click()

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//span[@class='checkbox-label'][contains(.,'Domingo')]",         // Supondo que o id do checkbox de domingo seja 'checkbox-domingo'
//             1: "//span[@class='checkbox-label'][contains(.,'Segunda-feira')]",   // Supondo que o id do checkbox de segunda seja 'checkbox-segunda'
//             2: "//span[@class='checkbox-label'][contains(.,'Terça-feira')]",     // Supondo que o id do checkbox de terça seja 'checkbox-terca'
//             3: "//span[@class='checkbox-label'][contains(.,'Quarta-feira')]",    // Supondo que o id do checkbox de quarta seja 'checkbox-quarta'
//             4: "//span[@class='checkbox-label'][contains(.,'Quinta-feira')]",    // Supondo que o id do checkbox de quinta seja 'checkbox-quinta'
//             5: "//span[@class='checkbox-label'][contains(.,'Sexta-feira')]",     // Supondo que o id do checkbox de sexta seja 'checkbox-sexta'
//             6: "//span[@class='checkbox-label'][contains(.,'Sábado')]"           // Supondo que o id do checkbox de sábado seja 'checkbox-sabado'
//         };

//         const checkboxSelector = checkboxSelectorMap[dayOfWeek];
//         if (checkboxSelector) {
//             cy.wait(3000)
//             cy.xpath(checkboxSelector, { timeout: 20000 }).click();
//         } else {
//             throw new Error('Não foi possível determinar o checkbox correspondente ao dia da semana atual.');
//         }

//         cy.get('#horaInicial').type('16:00')
//         cy.get('#horaFinal').type('17:00')
//         cy.contains('div', 'Áreas de atuação').click()
//         cy.wait(2000)
//         cy.contains('span', ' Área de Atuação - Teste Automação ').click()
//         cy.wait(2000)
//         cy.contains('div', 'Limitar procedimentos realizados no período').click()
//         cy.wait(2000)
//         cy.contains('span', ' Consulta Áreas de Atuação ').click()
//         cy.contains('button', ' Confirmar ').click({ force: true })
//         cy.wait(2000)
//         cy.contains('h2', 'Grade criada com sucesso.').should('be.visible')
//         cy.contains('button', 'Ok').click()
//     });

//     it('Validar fluxo de abertura da grade do profissional com acolhimento 2', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(5000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()
//         cy.contains('button', 'Incluir').click()

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//span[@class='checkbox-label'][contains(.,'Domingo')]",         // Supondo que o id do checkbox de domingo seja 'checkbox-domingo'
//             1: "//span[@class='checkbox-label'][contains(.,'Segunda-feira')]",   // Supondo que o id do checkbox de segunda seja 'checkbox-segunda'
//             2: "//span[@class='checkbox-label'][contains(.,'Terça-feira')]",     // Supondo que o id do checkbox de terça seja 'checkbox-terca'
//             3: "//span[@class='checkbox-label'][contains(.,'Quarta-feira')]",    // Supondo que o id do checkbox de quarta seja 'checkbox-quarta'
//             4: "//span[@class='checkbox-label'][contains(.,'Quinta-feira')]",    // Supondo que o id do checkbox de quinta seja 'checkbox-quinta'
//             5: "//span[@class='checkbox-label'][contains(.,'Sexta-feira')]",     // Supondo que o id do checkbox de sexta seja 'checkbox-sexta'
//             6: "//span[@class='checkbox-label'][contains(.,'Sábado')]"           // Supondo que o id do checkbox de sábado seja 'checkbox-sabado'
//         };

//         const checkboxSelector = checkboxSelectorMap[dayOfWeek];
//         if (checkboxSelector) {
//             cy.wait(3000)
//             cy.xpath(checkboxSelector, { timeout: 20000 }).click();
//         } else {
//             throw new Error('Não foi possível determinar o checkbox correspondente ao dia da semana atual.');
//         }

//         cy.get('#horaInicial').type('18:00')
//         cy.get('#horaFinal').type('23:50')
//         cy.contains('div', 'Áreas de atuação').click()
//         cy.wait(2000)
//         cy.contains('span', ' Área de Atuação - Teste Automação ').click()
//         cy.wait(2000)
//         cy.contains('div', 'Limitar procedimentos realizados no período').click()
//         cy.wait(2000)
//         cy.contains('span', ' Consulta Áreas de Atuação ').click()
//         cy.wait(1000)
//         cy.contains('span', ' Necessita acolhimento ').click();
//         cy.contains('button', ' Confirmar ').click({ force: true })
//         cy.wait(2000)
//         cy.contains('h2', 'Grade criada com sucesso.').should('be.visible')
//         cy.contains('button', 'Ok').click()
//     })

//     it('Validar fluxo de edição da grade do profissional 3', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//h5[@class='title'][contains(., ' Domingo ')]",
//             1: "//h5[@class='title'][contains(., ' Segunda-feira ')]",
//             2: "//h5[@class='title'][contains(., ' Terça-feira ')]",
//             3: "//h5[@class='title'][contains(., ' Quarta-feira ')]",
//             4: "//h5[@class='title'][contains(., ' Quinta-feira ')]",
//             5: "//h5[@class='title'][contains(., ' Sexta-feira ')]",
//             6: "//h5[@class='title'][contains(., ' Sábado ')]"
//         }

//         const dayOfWeekSelector = checkboxSelectorMap[dayOfWeek]
//         if (dayOfWeekSelector) {
//             cy.wait(3000)
//             cy.xpath(dayOfWeekSelector, { timeout: 20000 })
//             const xpathToEdit = `${dayOfWeekSelector}/ancestor::div[contains(@class, 'col')]//button[.//mat-icon[text()='edit']]`;
//             cy.xpath(xpathToEdit).first().click()
//             cy.wait(2000)
//             cy.contains('span', ' Salvar ').click()

//             cy.contains('h2', 'Grade atualizada com sucesso!').should('be.visible')

//         } else {
//             throw new Error("Não foi possível encontrar a grade");
//         }
//     });

//     it('Validar fluxo de grade do profissional em duplicidade 4', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(5000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()
//         cy.contains('button', 'Incluir').click()
// //
//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//span[@class='checkbox-label'][contains(.,'Domingo')]",         // Supondo que o id do checkbox de domingo seja 'checkbox-domingo'
//             1: "//span[@class='checkbox-label'][contains(.,'Segunda-feira')]",   // Supondo que o id do checkbox de segunda seja 'checkbox-segunda'
//             2: "//span[@class='checkbox-label'][contains(.,'Terça-feira')]",     // Supondo que o id do checkbox de terça seja 'checkbox-terca'
//             3: "//span[@class='checkbox-label'][contains(.,'Quarta-feira')]",    // Supondo que o id do checkbox de quarta seja 'checkbox-quarta'
//             4: "//span[@class='checkbox-label'][contains(.,'Quinta-feira')]",    // Supondo que o id do checkbox de quinta seja 'checkbox-quinta'
//             5: "//span[@class='checkbox-label'][contains(.,'Sexta-feira')]",     // Supondo que o id do checkbox de sexta seja 'checkbox-sexta'
//             6: "//span[@class='checkbox-label'][contains(.,'Sábado')]"           // Supondo que o id do checkbox de sábado seja 'checkbox-sabado'
//         };

//         const checkboxSelector = checkboxSelectorMap[dayOfWeek];
//         if (checkboxSelector) {
//             cy.wait(3000)
//             cy.xpath(checkboxSelector, { timeout: 20000 }).click();
//         } else {
//             throw new Error('Não foi possível determinar o checkbox correspondente ao dia da semana atual.');
//         }

//         cy.get('#horaInicial').type('16:00')
//         cy.get('#horaFinal').type('17:00')
//         cy.contains('div', 'Áreas de atuação').click()
//         cy.wait(2000)
//         cy.contains('span', ' Área de Atuação - Teste Automação ').click()
//         cy.wait(2000)
//         cy.contains('div', 'Limitar procedimentos realizados no período').click()
//         cy.wait(2000)
//         cy.contains('span', ' Consulta Áreas de Atuação ').click()
//         cy.contains('button', ' Confirmar ').click({ force: true })
//         cy.wait(2000)

//         cy.contains('h2', 'Não foi possível criar a grade de atendimento.').should('be.visible')
//     })

//     it('Validar fluxo na criação do bloqueio de agenda do profissional 5', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         let horaInicial = '16:30'
//         let horaFinal = '17:00'
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//h5[@class='title'][contains(., ' Domingo ')]",
//             1: "//h5[@class='title'][contains(., ' Segunda-feira ')]",
//             2: "//h5[@class='title'][contains(., ' Terça-feira ')]",
//             3: "//h5[@class='title'][contains(., ' Quarta-feira ')]",
//             4: "//h5[@class='title'][contains(., ' Quinta-feira ')]",
//             5: "//h5[@class='title'][contains(., ' Sexta-feira ')]",
//             6: "//h5[@class='title'][contains(., ' Sábado ')]"
//         }

//         const dayOfWeekSelector = checkboxSelectorMap[dayOfWeek]
//         if (dayOfWeekSelector) {
//             cy.wait(1000)
//             cy.xpath("(//button[.//span[contains(text(), 'Incluir')]])[2]").click();
//             cy.get('mat-dialog-container').within(() => {
//                 cy.xpath('//mat-datepicker-toggle//button[@aria-label="Open calendar"]')
//                     .eq(1)
//                     .click()
//                 cy.xpath('//span[contains(@class, "mat-calendar-body-today")]/ancestor::button')
//                     .first()
//                     .click()
//                 cy.xpath('//mat-datepicker-toggle//button[@aria-label="Open calendar"]')
//                     .eq(2)
//                     .click()
//                 cy.xpath('//span[contains(@class, "mat-calendar-body-today")]/ancestor::button')
//                     .first()
//                     .click()
//                 cy.get('mat-select[formcontrolname="weekdays"]')
//                     .click()
//                 cy.xpath('//mat-option//span[contains(@class, "mat-option-text")]')
//                     .first()
//                     .type('{esc}')
//                 cy.get('input[formcontrolname="initialTime"]')
//                     .click()
//                     .type(horaInicial)
//                 cy.get('input[formcontrolname="finalTime"]')
//                     .click()
//                     .type(horaFinal)
//                 cy.get('mat-select[formcontrolname="expertiseArea"]')
//                     .click()
//                 cy.xpath('//mat-option//span[contains(@class, "mat-option-text")]')
//                     .first()
//                     .type('{esc}')
//                 cy.get('input[formcontrolname="description"]')
//                     .type('teste')
//                 cy.get('button')
//                     .contains('span', ' Salvar ')
//                     .click()
//             })
//             cy.contains('button', 'Ok')
//                 .click()

//             cy.contains('h2', 'Bloqueio(s) adicionado(s) com sucesso').should('be.visible')

//         } else {
//             throw new Error("Não foi possível encontrar a grade");
//         }
//     });

//     it('Validar fluxo para criação do bloqueio de agenda do profissional em duplicidade 6', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         let horaInicial = '16:30'
//         let horaFinal = '17:00'
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//h5[@class='title'][contains(., ' Domingo ')]",
//             1: "//h5[@class='title'][contains(., ' Segunda-feira ')]",
//             2: "//h5[@class='title'][contains(., ' Terça-feira ')]",
//             3: "//h5[@class='title'][contains(., ' Quarta-feira ')]",
//             4: "//h5[@class='title'][contains(., ' Quinta-feira ')]",
//             5: "//h5[@class='title'][contains(., ' Sexta-feira ')]",
//             6: "//h5[@class='title'][contains(., ' Sábado ')]"
//         }

//         const dayOfWeekSelector = checkboxSelectorMap[dayOfWeek]
//         if (dayOfWeekSelector) {
//             cy.wait(1000)
//             cy.xpath("(//button[.//span[contains(text(), 'Incluir')]])[2]").click();
//             cy.get('mat-dialog-container').within(() => {
//                 cy.xpath('//mat-datepicker-toggle//button[@aria-label="Open calendar"]')
//                     .eq(1)
//                     .click()
//                 cy.xpath('//span[contains(@class, "mat-calendar-body-today")]/ancestor::button')
//                     .first()
//                     .click()
//                 cy.xpath('//mat-datepicker-toggle//button[@aria-label="Open calendar"]')
//                     .eq(2)
//                     .click()
//                 cy.xpath('//span[contains(@class, "mat-calendar-body-today")]/ancestor::button')
//                     .first()
//                     .click()
//                 cy.get('mat-select[formcontrolname="weekdays"]')
//                     .click()
//                 cy.xpath('//mat-option//span[contains(@class, "mat-option-text")]')
//                     .first()
//                     .type('{esc}')
//                 cy.get('input[formcontrolname="initialTime"]')
//                     .click()
//                     .type(horaInicial)
//                 cy.get('input[formcontrolname="finalTime"]')
//                     .click()
//                     .type(horaFinal)
//                 cy.get('mat-select[formcontrolname="expertiseArea"]')
//                     .click()
//                 cy.xpath('//mat-option//span[contains(@class, "mat-option-text")]')
//                     .first()
//                     .type('{esc}')
//                 cy.get('input[formcontrolname="description"]')
//                     .type('teste')
//                 cy.get('button')
//                     .contains('span', ' Salvar ')
//                     .click()
//             })
//             cy.contains('button', 'Ok')
//                 .click()

//             cy.contains('h2', 'Erro ao adicionar bloqueio na agenda').should('be.visible')
//             cy.contains('Erro desconhecido').should('not.be.visible')

//         } else {
//             throw new Error("Não foi possível encontrar a grade");
//         }
//     });

//     it('Validar fluxo para edição do bloqueio da agenda do profissional 7', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(1000)
//         cy.xpath("(//button[.//mat-icon[contains(text(), ' edit ')]])").click()
//         cy.wait(3000)
//         cy.get('input[formcontrolname="description"]')
//             .clear()
//             .type('Testando o fluxo de edição do bloqueio de grade')
//         cy.get('button')
//             .contains('span', ' Salvar ')
//             .click()
//         cy.wait(2000)
//         cy.contains('button', 'Ok')
//             .click()

//         cy.contains('h2', 'Bloqueio(s) adicionado(s) com sucesso').should('be.visible')
//     })

//     it('Validar fluxo de exclusão da grade do profissional 8', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//h5[@class='title'][contains(., ' Domingo ')]",
//             1: "//h5[@class='title'][contains(., ' Segunda-feira ')]",
//             2: "//h5[@class='title'][contains(., ' Terça-feira ')]",
//             3: "//h5[@class='title'][contains(., ' Quarta-feira ')]",
//             4: "//h5[@class='title'][contains(., ' Quinta-feira ')]",
//             5: "//h5[@class='title'][contains(., ' Sexta-feira ')]",
//             6: "//h5[@class='title'][contains(., ' Sábado ')]"
//         }

//         const dayOfWeekSelector = checkboxSelectorMap[dayOfWeek]
//         if (dayOfWeekSelector) {
//             cy.wait(3000)
//             cy.xpath(dayOfWeekSelector, { timeout: 20000 })
//             const xpathDoClose = `${dayOfWeekSelector}/ancestor::div[contains(@class, 'col')]//button[.//mat-icon[text()='close']]`;
//             cy.xpath(xpathDoClose).last().click();
//             cy.contains('button', ' Sim ').click()
//             cy.wait(2000)
//             cy.contains('button', 'Ok').click()

//             cy.contains('h2', 'Grade deletada com sucesso.').should('be.visible')

//         } else {
//             throw new Error("Não foi possível encontrar a grade");
//         }
//     })

//     it('Validar fluxo de exclusão da grade do profissional com acolhimento 9', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//h5[@class='title'][contains(., ' Domingo ')]",
//             1: "//h5[@class='title'][contains(., ' Segunda-feira ')]",
//             2: "//h5[@class='title'][contains(., ' Terça-feira ')]",
//             3: "//h5[@class='title'][contains(., ' Quarta-feira ')]",
//             4: "//h5[@class='title'][contains(., ' Quinta-feira ')]",
//             5: "//h5[@class='title'][contains(., ' Sexta-feira ')]",
//             6: "//h5[@class='title'][contains(., ' Sábado ')]"
//         }

//         const dayOfWeekSelector = checkboxSelectorMap[dayOfWeek]
//         if (dayOfWeekSelector) {
//             cy.wait(3000)
//             cy.xpath(dayOfWeekSelector, { timeout: 20000 })
//             const xpathDoClose = `${dayOfWeekSelector}/ancestor::div[contains(@class, 'col')]//button[.//mat-icon[text()='close']]`;
//             cy.xpath(xpathDoClose).last().click();
//             cy.contains('button', ' Sim ').click()
//             cy.wait(2000)
//             cy.contains('button', 'Ok').click()

//             cy.contains('h2', 'Grade deletada com sucesso.').should('be.visible')

//         } else {
//             throw new Error("Não foi possível encontrar a grade");
//         }
//     })

//     it('Validar fluxo de finalizar cadastro com direcionamento para o menu lista de profissionais 10', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()
//         cy.wait(3000)
//         cy.get('button').contains('Finalizar cadastro').click()
//         cy.url().should('include', '/register/professional')
//     });

//     it('Validar fluxo para exclusão do bloqueio de agenda do profissional 11', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)

//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()
//         cy.wait(5000)
//         cy.contains('button', ' close ')
//             .click()
//         cy.contains('h2', 'Bloqueio deletado com sucesso')
//             .should('be.visible')
//     });

//     it('Validar data inicio e fim na criação da grade com intervalo de 30 dias 12', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()
//         cy.contains('button', 'Incluir').click()

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//span[@class='checkbox-label'][contains(.,'Domingo')]",         // Supondo que o id do checkbox de domingo seja 'checkbox-domingo'
//             1: "//span[@class='checkbox-label'][contains(.,'Segunda-feira')]",   // Supondo que o id do checkbox de segunda seja 'checkbox-segunda'
//             2: "//span[@class='checkbox-label'][contains(.,'Terça-feira')]",     // Supondo que o id do checkbox de terça seja 'checkbox-terca'
//             3: "//span[@class='checkbox-label'][contains(.,'Quarta-feira')]",    // Supondo que o id do checkbox de quarta seja 'checkbox-quarta'
//             4: "//span[@class='checkbox-label'][contains(.,'Quinta-feira')]",    // Supondo que o id do checkbox de quinta seja 'checkbox-quinta'
//             5: "//span[@class='checkbox-label'][contains(.,'Sexta-feira')]",     // Supondo que o id do checkbox de sexta seja 'checkbox-sexta'
//             6: "//span[@class='checkbox-label'][contains(.,'Sábado')]"           // Supondo que o id do checkbox de sábado seja 'checkbox-sabado'
//         };

//         const checkboxSelector = checkboxSelectorMap[dayOfWeek];
//         if (checkboxSelector) {
//             cy.wait(3000)
//             cy.xpath(checkboxSelector, { timeout: 20000 }).click();
//         } else {
//             throw new Error('Não foi possível determinar o checkbox correspondente ao dia da semana atual.');
//         }

//         cy.get('#horaInicial').type('00:00')
//         cy.get('#horaFinal').type('06:00')
//         cy.xpath('//mat-datepicker-toggle//button[@aria-label="Open calendar"]')
//             .eq(1)
//             .click()
//         cy.xpath('//span[contains(@class, "mat-calendar-body-today")]/ancestor::button')
//             .first()
//             .click()
//         cy.xpath('//mat-datepicker-toggle//button[@aria-label="Open calendar"]')
//             .eq(2)
//             .click()
//         cy.get('button[aria-label="Next month"]').click()
//         cy.xpath('//span[contains(@class, "mat-calendar-body")]/ancestor::button')
//             .last()
//             .click()
//         cy.contains('div', 'Áreas de atuação').click()
//         cy.wait(2000)
//         cy.contains('span', ' Área de Atuação - Teste Automação ').click()
//         cy.wait(2000)
//         cy.contains('div', 'Limitar procedimentos realizados no período').click()
//         cy.wait(2000)
//         cy.contains('span', ' Consulta Áreas de Atuação ').click()
//         cy.contains('button', ' Confirmar ').click({ force: true })
//         cy.wait(2000)
//         cy.contains('h2', 'Grade criada com sucesso.').should('be.visible')
//         cy.contains('button', 'Ok').click()
//     });

//     it('Validar fluxo de exclusão da grade do profissional com intervalo de 30 dias 13', () => {
//         const baseUrl = Cypress.env('currentBaseUrl');
//         cy.visit(baseUrl);
//         cy.wait(2000)
//         cy.get('#register').click()
//         cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
//         cy.wait(2000)
//         cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
//         cy.contains('span', 'edit').click()
//         cy.contains('span', 'Horários de atendimento').click()

//         cy.wait(2000)

//         const today = new Date();
//         const dayOfWeek = today.getDay()

//         const checkboxSelectorMap = {
//             0: "//h5[@class='title'][contains(., ' Domingo ')]",
//             1: "//h5[@class='title'][contains(., ' Segunda-feira ')]",
//             2: "//h5[@class='title'][contains(., ' Terça-feira ')]",
//             3: "//h5[@class='title'][contains(., ' Quarta-feira ')]",
//             4: "//h5[@class='title'][contains(., ' Quinta-feira ')]",
//             5: "//h5[@class='title'][contains(., ' Sexta-feira ')]",
//             6: "//h5[@class='title'][contains(., ' Sábado ')]"
//         }

//         const dayOfWeekSelector = checkboxSelectorMap[dayOfWeek]
//         if (dayOfWeekSelector) {
//             cy.wait(3000)
//             cy.xpath(dayOfWeekSelector, { timeout: 20000 })
//             const xpathDoClose = `${dayOfWeekSelector}/ancestor::div[contains(@class, 'col')]//button[.//mat-icon[text()='close']]`;
//             cy.xpath(xpathDoClose).last().click();
//             cy.contains('button', ' Sim ').click()
//             cy.wait(2000)
//             cy.contains('button', 'Ok').click()

//             cy.contains('h2', 'Grade deletada com sucesso.').should('be.visible')

//         } else {
//             throw new Error("Não foi possível encontrar a grade");
//         }
//     })

    it('Validar breadcrumbs Home na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('a', 'Home').click()
        cy.url().should('include', 'amorsaude.com.br')
    });

    it('Validar breadcrumbs Cadastro na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('a', 'Cadastro').click()
        cy.url().should('include', 'amorsaude.com.br/register')
    });

    it('Validar breadcrumbs Profissionais na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('a', 'Profissionais').click()
        cy.url().should('include', 'amorsaude.com.br/register/professional')
    });

    it('Validar Coluna Data inicio na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Data início')
            .should('have.text', 'Data início')
    });

    it('Validar Coluna Data fim na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Data fim')
            .should('have.text', 'Data fim')
    });

    it('Validar Coluna Hora Inicio na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Horário início')
            .should('have.text', 'Horário início')
    });

    it('Validar Coluna Hora fim na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Horário fim')
            .should('have.text', 'Horário fim')
    });

    it('Validar Coluna Especialidades na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Especialidades')
            .should('have.text', 'Especialidades')
    });

    it('Validar Coluna Dia na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Dia')
            .should('have.text', 'Dia')
    });

    it('Validar Coluna Descrição na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Descrição')
            .should('have.text', 'Descrição')
    });

    it('Validar Coluna Ações na tela agenda do profissional', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.contains('span', 'Ações')
            .should('have.text', 'Ações')
    });

    it('Validar Coluna Domingo', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Domingo ')
            .should('have.text', ' Domingo ')
            .should('be.visible')
    });

    it('Validar Coluna Segunda', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Segunda-feira ')
            .should('have.text', ' Segunda-feira ')
            .should('be.visible')
    });

    it('Validar Coluna Terça', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Terça-feira ')
            .should('have.text', ' Terça-feira ')
            .should('be.visible')
    });

    it('Validar Coluna Quarta', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Quarta-feira ')
            .should('have.text', ' Quarta-feira ')
            .should('be.visible')
    });

    it('Validar Coluna Quinta', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Quinta-feira ')
            .should('have.text', ' Quinta-feira ')
            .should('be.visible')
    });

    it('Validar Coluna Sexta', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Sexta-feira ')
            .should('have.text', ' Sexta-feira ')
            .should('be.visible')
    });

    it('Validar Coluna Sabado', () => {
        const baseUrl = Cypress.env('currentBaseUrl');
        cy.visit(baseUrl);
        cy.wait(2000)
        cy.get('#register').click()
        cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
        cy.wait(2000)
        cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
        cy.contains('span', 'edit').click()
        cy.contains('span', 'Horários de atendimento').click()
        cy.wait(3000)
        cy.get('h5').contains(' Sábado ')
            .should('have.text', ' Sábado ')
            .should('be.visible')
    });

    // it('Validar filtro da Grade Vigente Data inicial vs Data final', () => {
    //     const baseUrl = Cypress.env('currentBaseUrl');
    //     cy.visit(baseUrl);
    //     cy.wait(2000)
    //     cy.get('#register').click()
    //     cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
    //     cy.wait(2000)
    //     cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
    //     cy.contains('span', 'edit').click()
    //     cy.contains('span', 'Horários de atendimento').click()
    //     cy.wait(2000)
    //     cy.get('button[aria-label="Open calendar"]').click()
    //     cy.wait(2000)
    //     cy.get('button[aria-label="Next month"]').click()
    //     cy.xpath('//span[contains(@class, "mat-calendar-body")]/ancestor::button')
    //         .first()
    //         .click()
    //     cy.xpath('//span[contains(@class, "mat-calendar-body")]/ancestor::button')
    //         .last()
    //         .click()
    //     cy.wait(2000)
    //     cy.get('button')
    //         .contains('span', ' Filtrar ')
    //         .click()
    // });

    // it('Validar fraseologia quando não há abertura de grade (Nenhum horário definido)', () => {
    //     const baseUrl = Cypress.env('currentBaseUrl');
    //     cy.visit(baseUrl);
    //     cy.wait(2000)
    //     cy.get('#register').click()
    //     cy.contains('span', 'Lista de profissionais', { timeout: 30000 }).click()
    //     cy.wait(2000)
    //     cy.contains('div', 'Procure por CPF ou nome', { timeout: 20000 }).type('322.354.320-18{enter}', { timeout: 20000 })
    //     cy.contains('span', 'edit').click()
    //     cy.contains('span', 'Horários de atendimento').click()
    //     cy.contains('h5', 'Domingo')
    //         .parent() // Sobe para o container do título
    //         .contains('span', 'Nenhum horário definido')
    //         .should('have.text', 'Nenhum horário definido')
    // });

});
