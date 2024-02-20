describe('add product to cart', () => {
  it('should be possible navigate to the product page and add it to the cart', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('adicionar ao carrinho', { matchCase: false }).click()
    cy.contains('cart (1)', { matchCase: false }).should('exist')
  })

  it('should not duplicate same product in cart', () => {
    cy.visit('http://localhost:3000')
    cy.get('a[href^="/product"]').first().click()
    cy.url().should('include', '/product')
    cy.contains('adicionar ao carrinho', { matchCase: false }).click()
    cy.contains('adicionar ao carrinho', { matchCase: false }).click()
    cy.contains('cart (1)', { matchCase: false }).should('exist')
  })

  it('should be able to search for a product and add it to cart', () => {
    cy.visit('http://localhost:3000')
    cy.get('input[name=q]').type('camiseta').parent('form').submit()
    cy.get('a[href^="/product"]').first().click()
    cy.contains('adicionar ao carrinho', { matchCase: false }).click()
    cy.contains('cart (1)', { matchCase: false }).should('exist')
  })
})
