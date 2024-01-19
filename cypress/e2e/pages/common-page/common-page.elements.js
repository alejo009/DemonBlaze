export class CommonPageElements {
    static get topMenu() {
        return {
            get signUp() {
                return cy.get('a[data-target="#signInModal"]');
            },

            get login(){
                return cy.get('a[data-target="#logInModal"]');
            },

            get nameOfUser(){
                return cy.get("#nameofuser");
            }
        
        };
    }
}