/// <reference types="cypress" />
describe("Proj One Test", () => {
  it("Test Home Load", () => {
    cy.visit("http://localhost:3000/");
  });
});
