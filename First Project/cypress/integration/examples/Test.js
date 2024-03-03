/// <reference types="Cypress" />

describe('My First Test Suite', () => {

  it('Basic Tests', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')                                //get an element and enter text
    //cy.get('.product:visible').should('have.length',4)  //added assertion, only visible elements will display
  });

});

