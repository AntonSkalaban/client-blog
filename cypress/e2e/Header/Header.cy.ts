describe("Header", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open modal", () => {
    cy.get('[data-testid="video-frame"]').should("not.exist");

    cy.get('[data-testid="header-btn"]').click();

    cy.get('[data-testid="video-frame"]').should("exist");
  });

  it("should change language", () => {
    cy.get('[data-testid="home-header"]').should(
      "contain",
      "Step-by-step guide to choosing great font pairs",
    );
    cy.get('[data-testid="lang-btn"]').click({ multiple: true, force: true });
    cy.get('[data-testid="locale-ru"]').click({ multiple: true, force: true });

    cy.get('[data-testid="home-header"]').should(
      "contain",
      "Пошаговое руководство по выбору отличных пар шрифтов",
    );
  });
});
