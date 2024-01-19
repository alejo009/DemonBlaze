import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {

    static navigateToTheApplication() {
        cy.visit(CommonPageConstants.applicationUrl);
    }
    static clickOnSignUpOption() {
        CommonPageElements.topMenu.signUp.click();
    }
}