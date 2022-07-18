import { LogIn } from "../models/Login.js"
import { Modal } from "../models/Modal.js"

const formLogin = document.querySelector("#loginForm")
const toHome = document.querySelector("#redirectHome")

if (localStorage.getItem("token")) {
    window.location = "../../index.html"
}

formLogin.addEventListener("submit", async (event) => {
    const token = await LogIn.getToken(event, formLogin)
    if(token.error){
        Modal.genericModal(token.error)
    } else {
        localStorage.setItem("token", token)
        window.location = "../../index.html"
    }

})

toHome.addEventListener("click", () => {
    window.location = "../../index.html"
})
