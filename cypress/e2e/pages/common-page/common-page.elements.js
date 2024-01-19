export class CommonPageElements {
    static get topMenu() {
        return {
            get signUp() {
                return cy.get('a[data-target="#signInModal"]');
            },
        };
    }
}