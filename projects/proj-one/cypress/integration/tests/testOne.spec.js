/// <reference types="cypress" />
describe("Dummy Test", () => {
  it("Test Home Load", () => {
    cy.visit("http://localhost:3000/");
  });
});
