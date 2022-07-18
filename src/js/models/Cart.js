import { Api } from "../api/Api.js";

export class Cart {

    static cart = document.querySelector("#divCart")

    static async addProductCart(productId, products) {

        const token = localStorage.getItem('token')

        const product = products.find(({id}) => id === Number(productId))

        if(token){

            await Api.cartAddProduct({product_id: product.id})
            localStorage.setItem("cart", JSON.stringify(await Api.cartGet())) 
      
          } else {
      
            if(!JSON.parse(localStorage.getItem("cart"))){
      
              localStorage.setItem("cart", JSON.stringify([product]))
      
            } else {
      
              const products = JSON.parse(localStorage.getItem("cart"))
              
              products.push(product)
      
              localStorage.setItem("cart", JSON.stringify(products))
      
            }
      
          }

        const cart = JSON.parse(localStorage.getItem("cart"))

        if(token) {
          Cart.templateCard(cart)
        } else {
          Cart.templateCard(cart, "public")
        }

        return product

    }

    static templateCard(cart, cartStorage = "private"){

        this.cart.innerHTML = ""
        cart.forEach(el => {

            const product = cartStorage === "private" ? el.products : el

            const card = document.createElement("section")
            card.classList.add("cardCart")
    
            card.innerHTML = 
                            `
                            <img src = "${product.imagem}">
    
                            <aside class="descricaoCart">
                                <p class="nameCart">${product.nome}</p>
                                <p class="categoryCart">${product.categoria}</p>
                                <p class="priceCart">R$ ${product.preco.toFixed(2).replace(".", ",")}</p>
                            </aside>
    
                            <i class="fa-solid fa-trash deleteProduct" id="${product.id}"></i>
                            
                            `
    
            this.cart.appendChild(card)

        })

        let total

        if(cartStorage === "private"){
            total = cart.reduce((acc, el) => el.products.preco + acc, 0)
        } else {
            total = cart.reduce((acc, el) => el.preco + acc, 0)
        }

        const ul = document.querySelector(".totalCart")

        ul.innerHTML = 
                        `
                        <li id="quantity">
                          <p>Quantidade</p>
                          <p>${cart.length}</p>
                        </li>
                        <li id="total">
                          <p>Total</p>
                          <p>R$ <span>${total.toFixed(2).replace(".", ",")}</span></p>
                        </li>
                        `
        const containerCart = document.querySelector("#containerCart")

    }

}