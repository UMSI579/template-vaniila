// Monitor console warnings, errors, and logs
let consoleError;
let consoleWarning;
let consoleLog;


Cypress.on('window:before:load', (win) => {
  consoleError = cy.spy(win.console, 'error');
  consoleWarning = cy.spy(win.console, 'warn');
  consoleLog = cy.spy(win.console, 'log');
});
const DELAY = 1000;


describe('Basic Tests', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test.
    cy.visit(`http://localhost:${Cypress.env('theport') || 8080}`)
  })
  it('has a title', () => {
    cy.get('h1').should('include.text', 'Vanilla Template')
    cy.get('main').should('include.text', 'Main Content')
  })

  afterEach(() => {
    // Confirm there are no console log/warning/errors after every test iteration.
    cy.wait(DELAY).then(() => {
      expect(consoleError).to.not.be.called;
      expect(consoleWarning).to.not.be.called;
      expect(consoleLog).to.not.be.called;
    });
  });
})
