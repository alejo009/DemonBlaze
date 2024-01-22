import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderHelper{
    static insertName(name){
        PlaceOrderElements.elements.name.type(name);
    }

    static insertCountry(country){
        PlaceOrderElements.elements.country.type(country)
    }

    static insertCity(city){
        PlaceOrderElements.elements.city.type(city);
    }

    static insertCreditCard(card){
        PlaceOrderElements.elements.creditCard.type(card);
    }

    static insertMonth(month){
        PlaceOrderElements.elements.month.type(month);
    }

    static insertYear(year){
        PlaceOrderElements.elements.year.type(year);
    }

    static clickOnPurchaseButton(){
        PlaceOrderElements.elements.purchase.click();
    }

    static verifyPurchaseSuccessful(){
        PlaceOrderElements.elements.purchaseSuccessCheckMark.should('exist');
    }

}