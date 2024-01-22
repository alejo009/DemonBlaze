import { SignUpElements } from "./sign-up.elements";
import { CommonPageHelper } from "../common-page/common-page.helper";

export class SignUpHelper {

    static insertUsername(username){
        SignUpElements.elements.username.invoke('val',username);
    }

    static insertPassword(password){
        SignUpElements.elements.password.click();
        SignUpElements.elements.password.type(password);
    }

    static clickOnSignUpButton(){
        SignUpElements.elements.signUpButton.click();
    }

    static createUserAccount(username,password){
        CommonPageHelper.clickOnSignUpOption();
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnSignUpButton();
    }
}