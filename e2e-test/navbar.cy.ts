describe("Navbar", () => {
    it("clicks the 'About Us' link and navigates to about page", () => {
      cy.visit("/");
  
      cy.contains('a, [role="button"]', /^About\s*Us$/i, { timeout: 10000 })
        .should("be.visible")
        .scrollIntoView({ offset: { top: -80, left: 0 } })
        .click();
  
      cy.location("pathname", { timeout: 10000 })
        .should("eq", "/about-us");
    });
  });
  