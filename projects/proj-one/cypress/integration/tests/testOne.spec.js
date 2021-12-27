/// <reference types="cypress" />
describe("Project One Test", () => {
  it("Test Home Load", () => {
    cy.visit("http://localhost:3000/");
  });
});
