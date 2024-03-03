/// <reference types="Cypress" />

describe('My First Test Suite', () => {

  it('Basic Tests', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

    cy.get('.search-keyword').type('ca')                                //get an element and enter text
    //cy.get('.product:visible').should('have.length',4)  //added assertion, only visible elements will display

    cy.get('.products').find('.product').should('have.length',4)  //parent-child chaining

    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()  //eq is index no

    //OR

    cy.get('.products').find('.product').each(($element, index, $list) => {

      const vegName = $element.find('h4.product-name').text()
      
      if (vegName.includes('Cashews')) {                       //$el is a wrapped jQuery element
        cy.wrap($element).find('button').click()
      }
    })

  });

});