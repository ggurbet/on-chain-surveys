describe("Onchain Surveys Tester", () => {

    it("login test admin", () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#username').type('mec2')
        cy.get("#password").type('12345')
        cy.get("#loginButton").click()
    })

    it("login test regular user", () => {
        cy.visit('http://localhost:3000/login')
        cy.get('#username').type('tester')
        cy.get("#password").type('12345678')
        cy.get("#loginButton").click()
    })

})

