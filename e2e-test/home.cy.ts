describe("Homepage", () => {
  it("clicks the 'Book an appointment' CTA and navigates to contact", () => {
    cy.visit("/");

    cy.contains('a, [role="button"]', /^Book an appointment$/i, { timeout: 10000 })
      .should('be.visible')
      .scrollIntoView({ offset: { top: -80, left: 0 } })
      .click();

    cy.location('pathname', { timeout: 10000 })
      .should('match', /\/contact(-us)?$/);
  });
});

