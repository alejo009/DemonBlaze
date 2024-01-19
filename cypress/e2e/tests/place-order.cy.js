/// <reference types="cypress" />

import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { SignUpConstants } from "../pages/sign-up/sign-up.constants";
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";

describe('place order',()=>{
    it('Place order with newly created user account',()=>{
        const username = SignUpHelper.generateRandomUsername();
        const password = SignUpConstants.testData.password;
        CommonPageHelper.navigateToTheApplication();
        CommonPageHelper.clickOnSignUpOption();
        SignUpHelper.insertUsername(username);
        SignUpHelper.insertPassword(password);
        SignUpHelper.clickOnSignUpButton();

        CommonPageHelper.clickOnLoginOption();
        cy.wait(6000);
    })
})