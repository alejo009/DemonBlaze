import { cartElements } from "./cart.elements";

export class CartHelper{
    static clickOnPlaceOrderButton(){
        cartElements.elements.placeOrderButton.click();
    }
}