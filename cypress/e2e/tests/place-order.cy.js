/// <reference types="cypress" />

import { CommonPageHelper } from "../pages/common-page/common-page.helper"

describe('place order',()=>{
    it('Place order with newly created user account',()=>{
        CommonPageHelper.navigateToTheApplication();
        CommonPageHelper.clickOnSignUpOption();
        cy.wait(2000);
    })
})