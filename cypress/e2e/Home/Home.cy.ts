import { pagesPathEnam } from "../../../src/types/index";

describe("Home-page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should use inifity scroll", () => {
    cy.get('[data-testid="feature-post-btn"]').should("not.exist");

    cy.scrollTo("bottom");
    cy.wait(500);
    cy.scrollTo(0, 1000);
    cy.get('[data-testid="feature-post-btn"]').should("exist");
  });

  it("should navigate to the blog page when the button is clicked", () => {
    cy.get(".home-header__btn").click();

    cy.url().should("include", `/${pagesPathEnam.Blog}`);
    cy.contains("Featured Post").should("exist");
  });

  it("should navigate to the blog[id] page when the button is clicked", () => {
    cy.scrollTo("bottom");
    cy.wait(500);
    cy.scrollTo(0, 1000);
    cy.get('[data-testid="feature-post-btn"]').click();

    cy.url().should("include", `/${pagesPathEnam.Blog}/${1}`);
  });
});
