describe("counter browser app", () => {
  it("should show a count of 1 when first loaded", () => {
    cy.visit("/");
    cy.get("h1").contains(/^1$/);
  });

  it("should increment the count when the 'next day' button is pressed", () => {
    cy.visit("/");
    cy.get("button").contains("next day").click().click().click();
    cy.get("h1").contains(/^4$/);
  });

  it("should persist the count value if the browser is reloaded", () => {
    cy.visit("/");
    cy.get("button").contains("next day").click().click().click();
    cy.get("h1").contains(/^7$/);
    cy.reload();
    cy.get("button").contains("next day").click();
    cy.get("h1").contains(/^8$/);
  });

  it("should reset the count to 1 on the thirteenth press of the 'next day' button", () => {
    cy.visit("/");
    cy.get("button")
      .contains("next day")
      .click()
      .click()
      .click()
      .click()
      .click();

    cy.get("h1").contains(/^1$/);
  });
});
