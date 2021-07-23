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

    it('Click on icon shopping cart',() =>{
        
        cy

            .get('a[class="shopping_cart_link"]')
            .scrollIntoView()
            .should('be.visible')
            .click()
            
    });

    it('Click on error button when login time expired',() =>{
        
        cy

            .get('button[class="error-button"]')
            .scrollIntoView()
            .should('be.visible')
            .click()
            .wait(3000)
            
    });

    it('Login again and click on icon shopping cart and checkout',() =>{
        
    
    
        let username = 'standard_user';
    
        cy
            .get('input[placeholder="Username"]')
            .type(username)
            .should('have.value', username)

        let password = 'secret_sauce';
        
        cy
            .get('input[placeholder="Password"]')
            .type(password)
            .should('have.value', password)
            .wait(3000)

        cy
            .get('#login-button.submit-button.btn_action')
            .should('be.visible')
            .click()    
            .wait(3000)  
            
        cy
            .get('#add-to-cart-sauce-labs-onesie.btn.btn_primary.btn_small.btn_inventory')
            .contains('Add to cart')
            .should('be.visible')
            .click()
            .wait(3000)  

        cy
            .get('button[name="add-to-cart-test.allthethings()-t-shirt-(red)"]')
            .contains('Add to cart')
            .should('be.visible')
            .click()
            .wait(3000)  
        
        cy
            .get('a[class="shopping_cart_link"]')
            .scrollIntoView()
            .should('be.visible')
            .click()
            .wait(3000)

        cy    
            .get('button[class="btn btn_action btn_medium checkout_button"]')
            .contains('Checkout')
            .scrollIntoView()
            .should('be.visible')
            .click()
            .wait(3000)

            //User data to delivery
        cy
            .get('input[placeholder="First Name"]')
            .type('Lucas')
            .should('have.value', 'Lucas')
        
        cy
            .get('input[placeholder="Last Name"]')
            .type('Gonçalves')
            .should('have.value', 'Gonçalves')

        cy
            .get('input[placeholder="Zip/Postal Code"]')
            .type('69049-106')
            .should('have.value', '69049-106')   
        
        cy

            .get('input[class="submit-button btn btn_primary cart_button btn_action"]')
            .should('be.visible')
            .click()    
            .wait(3000) 

            //finish    
        cy
            .get('button[class="btn btn_action btn_medium cart_button"]')
            .should('be.visible')
            .click()    
            .wait(3000) 
    });



})