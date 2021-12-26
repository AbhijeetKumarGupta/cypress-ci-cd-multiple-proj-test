/// <reference types="cypress" />
describe("Project One Tests", () => {
  it("Test Home Load", () => {
    cy.visit("http://localhost:3000/");
  });
});
