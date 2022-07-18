import { Api } from "../api/Api.js";
import { Card } from "../models/Card.js";
import { Cart } from "../models/Cart.js";

const loginButton = document.querySelector("#login");
const registerButton = document.querySelector("#register");
const adminButton = document.querySelector("#admin");

const token = localStorage.getItem("token") || "";

let products

if (token) {

  products = await Api.privateGet()

  const cartApi = await Api.cartGet()

  localStorage.setItem("cart", JSON.stringify(cartApi))

  Cart.templateCard(cartApi)

  const getprivate = await Api.privateGet();

  Card.createCard([...getprivate]);

}else {

  products = await Api.publicGet()

  if(localStorage.getItem("cart")){

    const publicCart = JSON.parse(localStorage.getItem("cart"))

    Cart.templateCard(publicCart, "public")

  }

}

loginButton.addEventListener("click", () => {
  window.location.pathname = "/src/htmlPages/login.html";
});

registerButton.addEventListener("click", () => {
  window.location.pathname = "/src/htmlPages/register.html";
});

adminButton.addEventListener("click", () => {
  window.location.pathname = "/src/htmlPages/admin.html";
});

const cart = document.querySelector("#cart")
const background = document.querySelector("#backgroundCart")

cart.addEventListener("click", () => {
    if(window.screen.width < 761){
          cart.parentNode.classList.toggle("openCart")
          background.classList.toggle("background")
    }
})

window.addEventListener("resize", () => {
  if(window.screen.width > 760){
      cart.parentNode.classList.remove("openCart")
      background.classList.remove("background")
  }
})

const cards = document.querySelector(".container")

cards.addEventListener("click", async (event) => {

  if(event.target.tagName === "BUTTON"){
    await Cart.addProductCart(event.target.id, products)
  }
  
})

const deleteProduct = document.querySelector(".modal")

deleteProduct.addEventListener("click", (event) => {

  if(event.target.tagName === "I"){

    const productId = event.target.id

    const cart = JSON.parse(localStorage.getItem("cart"))

    let index

    cart.forEach( (el, i) => {
      
      const product = token ? el.products : el

      if(product.id === Number(productId)){
        index = i
      }
      
    })

    cart.splice(index, 1)

    localStorage.setItem("cart", JSON.stringify(cart))

    if(token){
      Api.cartDeleteProduct(productId)

      Cart.templateCard(cart)

    } else{

      Cart.templateCard(cart, "public")

    }

  }
  
})

if (token) {

  const getprivate = await Api.privateGet();
  Card.createCard(getprivate);
  registerButton.className = "hidden";
  loginButton.className = "hidden";

} else {

  adminButton.className = "hidden";
  const getpublic = await Api.publicGet();
  Card.createCard(getpublic);

}
