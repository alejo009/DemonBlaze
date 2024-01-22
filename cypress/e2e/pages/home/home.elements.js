export class HomeElements{
    static get elements(){
        return{
            productoLink(productName){
                return cy.contains('a',productName)

            }
        }
        
    }
}