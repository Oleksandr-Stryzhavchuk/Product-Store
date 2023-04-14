/// <reference types='cypress' />

const { generateData } = require('../support/generate');

describe('Book Store app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should allow to register', () => {
    const { userName, password } = generateData();

    cy.get('#signin2').click({ force: true });
    cy.get('#sign-username').type(userName);
    cy.get('#sign-password').type(password);
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    cy.get('#login2').click({ force: true });
    cy.get('#loginusername').type(userName);
    cy.get('#loginpassword').type(password);
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click({ force: true })
  });
});
