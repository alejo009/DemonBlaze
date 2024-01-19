import { SignUpElements } from "./sign-up.elements";

export class SignUpHelper {
    static generateRandomUsername = (length = 10) => {
        let result = '';
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    };

    static insertUsername(username){
        SignUpElements.elements.username.type(username);
    }

    static insertPassword(password){
        SignUpElements.elements.password.type(password);
    }

    static clickOnSignUpButton(){
        SignUpElements.elements.signUpButton.click();
    }
}