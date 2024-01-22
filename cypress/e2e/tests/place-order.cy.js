/// <reference types="cypress" />

import { CommonPageElements } from "../pages/common-page/common-page.elements";
import { CommonPageHelper } from "../pages/common-page/common-page.helper"
import { HomeConstants } from "../pages/home/home.constants";
import { HomeHelper } from "../pages/home/home.helper";
import { LoginHelper } from "../pages/login/login.helper";
import { productoHelper } from "../pages/product/producto.helper";
import { SignUpConstants } from "../pages/sign-up/sign-up.constants";
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";

describe('place order',()=>{
    it('Place order with newly created user account',()=>{
        const username = CommonPageHelper.generateRandomString();
        const password = CommonPageHelper.generateRandomString();
        const productName = HomeConstants.testData.productoName;
        CommonPageHelper.navigateToTheApplication();
        cy.wait(2000);
        CommonPageHelper.clickOnSignUpOption();
        SignUpHelper.insertUsername(username);
        SignUpHelper.insertPassword(password);
        SignUpHelper.clickOnSignUpButton();

        CommonPageHelper.clickOnLoginOption();
        cy.wait(2000);
        LoginHelper.insertUsername(username);
        LoginHelper.insertPassword(password);
        LoginHelper.clickOnLoginButton();
        CommonPageHelper.verifySignedUser(username)
        
        CommonPageHelper.clickOnHomePage();
        HomeHelper.clickOnProductName(productName);
        productoHelper.clickOnAddToProductButton();

        CommonPageHelper.clickOnCartOption();


        cy.wait(6000);
    })
})