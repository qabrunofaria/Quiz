/// <reference types='Cypress' />

const questionLetters = ['A', 'B', 'C', 'D'];

describe('Automação de teste - Quiz', () => {

    beforeEach(() => {

        cy.visit('https://3jvz3m.csb.app/?standalone')

    })

    context('Validação pagina inicial', () => {

        it('Verificar que as informações estão sendo demonstradas', () => {
            cy.url().should('be.eq', 'https://3jvz3m.csb.app/');

            cy.get('.header-user h1')
                .should('have.text', 'DevQuiz');

            cy.get('.header-user h2 span')
                .should('have.text', '');

            cy.get('.container')
                .should('have.text', '');

            cy.get('.btn:contains(Easy)')
                .should('be.visible');

            cy.get('.btn:contains(Hard)')
                .should('be.visible');

            cy.get('.btn:contains(Start)')
                .should('be.disabled');
        })
    })

    context('Validação da pagina quiz e result ', () => {

        it('Acessar o site e responde as perguntas na dificuldade "Hard"', () => {

            cy.get('.container').type('Teste');

            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.btn:contains(Hard)')
                .should('be.visible').click()

            cy.get('.btn:contains(Start)')
                .should('not.be.disabled')
                .click();

            // Tela pergunta 1
            cy.url().should('be.eq', 'https://3jvz3m.csb.app/quiz')

            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.last.question')
                .should('have.text', '1');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 1');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_a"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Pergunta 2
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '12');

            cy.get('.active.last.question')
                .should('have.text', '2');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 2');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_c"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Pergunta 3
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '123');

            cy.get('.active.last.question')
                .should('have.text', '3');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 3');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_d"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Pergunta 4
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '1234');

            cy.get('.active.last.question')
                .should('have.text', '4');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 4');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_c"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Pergunta 5
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '12345');

            cy.get('.active.last.question')
                .should('have.text', '5');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 5');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_a"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Pergunta 6
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '123456');

            cy.get('.active.last.question')
                .should('have.text', '6');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 6');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_c"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Tela pergunta 7
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '1234567');

            cy.get('.active.last.question')
                .should('have.text', '7');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 7');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_b"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Pergunta 8
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '12345678');

            cy.get('.active.last.question')
                .should('have.text', '8');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 8');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_d"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Tela pergunta 9
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '123456789');

            cy.get('.active.last.question')
                .should('have.text', '9');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 9');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Next)')
                .should('be.disabled')

            cy.get('input[name="answer_a"]').check();

            cy.get('.btn:contains(Next)')
                .should('not.be.disabled')
                .click();

            // Tela pergunta 10
            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question')
                .should('have.text', '12345678910');

            cy.get('.active.last.question')
                .should('have.text', '10');

            cy.get('.question-index')
                .invoke('text')
                .should('contain', 'Question 10');

            cy.get('.quiz-container main h2')
                .should('not.have.text', '');

            questionLetters.forEach(letter => {
                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-letter')
                    .should('have.text', letter);

                cy.get(`input[name="answer_${letter.toLowerCase()}"]`)
                    .parent()
                    .find('.alternative-text')
                    .should('not.have.text', '');
            })

            cy.get('.btn:contains(Result)')
                .should('be.disabled')

            cy.get('input[name="answer_d"]').check();

            cy.get('.btn:contains(Result)')
                .should('not.be.disabled')
                .click();

            // Tela Resultado
            cy.url().should('be.eq', 'https://3jvz3m.csb.app/result');

            cy.get('.header-user h2 span')
                .should('have.text', 'Teste');

            cy.get('.active.question').should('have.text', '12345678910');

            cy.get('.btn.restart').should('be.visible');

            cy.get('table tbody tr').its('length').should('be.equal', 10);
        })
    })
})