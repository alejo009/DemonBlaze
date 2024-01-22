import { LoginElements } from "./login.elements";
import { CommonPageHelper } from "../common-page/common-page.helper";

export class LoginHelper {
    static insertUsername(username) {
        LoginElements.elements.username.invoke('val',username);
    }

    static insertPassword(password){
        LoginElements.elements.password.click();
        LoginElements.elements.password.type(password);
    }

    static clickOnLoginButton(){
        LoginElements.elements.loginButton.click();
    }

    static login(username,password){
        CommonPageHelper.clickOnLoginOption();
        this.insertUsername(username);
        this.insertPassword(password);
        this.clickOnLoginButton();
        CommonPageHelper.verifySignedUser(username)
    }
}