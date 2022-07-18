import { Card } from "./Card.js"

export class Filter {

    static search (arr, value, page = "home") {
        
        const filterProducts = arr.filter((product) => {
            return product.nome.toLowerCase().includes(value.toLowerCase())
        })

        if (page === "home") {
            Card.createCard(filterProducts)
        } else {
            Card.createCardAdmin(filterProducts)
        }

    }

}