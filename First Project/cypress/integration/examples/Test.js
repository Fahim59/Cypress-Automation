describe('My First Test Suite', () => {                        //Describe block defines a test suite

  it('Basic Tests', () => {                            //'it' block represents an individual test case
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    cy.url().then((url) => {
      cy.log('Current URL is: ' +url)
    })

    cy.title().then((title) => {
      cy.log('Current Title is: ' +title)
    })
  });

});

