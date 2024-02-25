describe('My First Test Suite', () => {                        //Describe block defines a test suite

  it('Should open Google', () => {                            //'it' block represents an individual test case

    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

  });
});