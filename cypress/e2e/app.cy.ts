describe('Essentials App', () => {
  beforeEach(() => cy.visit('/'));

  it('should have UTF-8 as charset', () => {
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
  });

  it('should do an implicit subject assertion', () => {
    cy.get('.sidebar-wrapper ul.nav li.active').should('contain.text', 'Home');
  });

  it('should do an explicit subject assertion', () => {
    cy.get('.sidebar-wrapper ul.nav li:nth-child(3) a').should(($a) => {
      expect($a).to.contain.text('Flights');
      expect($a).to.have.attr('href', '/flight-booking/flight-search');
    });
  });

  it('should count the nav entries', () => {
    cy.get('.sidebar-wrapper ul.nav li').its('length').should('be.gte', 3);
  });
});
