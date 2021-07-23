describe('Login', () =>{
    it('Open login page', () => {
        
        cy.visit('/')
            
    });
    it('Insert username', () => {
        let username = 'standard_user';
        
        cy
            .get('input[placeholder="Username"]')
            .type(username)
            .should('have.value', username)
    });
    it('Insert password', () => {
        let password = 'secret_sauce';
        
        cy
            .get('input[placeholder="Password"]')
            .type(password)
            .should('have.value', password)
    });
    it('Submit', () => {
        
        cy
            .get('#login-button.submit-button.btn_action')
            .should('be.visible')
            .click()
    });

    it('Add Sauce Labs Onesie',() =>{
        
        cy
            .get('#add-to-cart-sauce-labs-onesie.btn.btn_primary.btn_small.btn_inventory')
            .contains('Add to cart')
            .should('be.visible')
            .click()
    });

    it('Add T-Shirt (Red)',() =>{
        
        cy
            .get('button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]')
            .contains('Add to cart')
            .should('be.visible')
            .click()
    });

    // it('Check quantity of items',() =>{
        
    //     cy
    //         .get('a[class="shopping_cart_link"]')
    //         .scrollIntoView()
    //         .should(($span) => {
    //             expect($span).to.contains('1')        
    //         })
    //         .scrollIntoView()
    //         .click()
            
    // });

    it('Click on icon shopping cart',() =>{
        
        cy

            .get('a[class="shopping_cart_link"]')
            .scrollIntoView()
            .should('be.visible')
            .click()
            
    });




})