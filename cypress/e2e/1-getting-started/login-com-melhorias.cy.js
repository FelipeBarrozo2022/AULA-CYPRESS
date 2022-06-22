/// <reference types="cypress"/> 
// Comando para informar que será utilizado métodos do CYPRESS

beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') // O comando "cy.visit" serve para acessar a url informada
});

// afterEach(() => {
//     cy.screenshot()    
//});                     # Comando para salvar uma evidência da cada teste, Cria uma pasta com prints da execução


context('Funcionalidade Login', () => {
     it('Deve fazer login com sucesso', () => {
          cy.get('#username').type('aluno_ebac@teste.com')
          cy.get('#password').type('teste@teste.com')
          cy.get('.woocommerce-form > .button').click()

          cy.get('.page-title').should('contain', 'Minha conta')
          cy.get('a > .hidden-xs').should('contain', 'Welcome aluno')

     })

     it('Deve exibir uma menssagem de erro so inserir usuário inválido', () => {
          cy.get('#username').type('aluno_e000000@teste.com')
          cy.get('#password').type('teste@teste.com')
          cy.get('.woocommerce-form > .button').click()

          cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

     })
     it('Deve exibir uma menssagem de erro so inserira a senha inválida', () => {
          cy.get('#username').type('aluno_ebac@teste.com')
          cy.get('#password').type('teste@t')
          cy.get('.woocommerce-form > .button').click()

          cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
                                             // O comando 'contain' devemos informar para validar um teste, ele verificar se 
                                            // em algum lugar da tela que eu especifiquei contem a menssagem informada.
     })

})

