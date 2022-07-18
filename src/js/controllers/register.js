import {Register} from "/src/js/models/Register.js"
import {Api} from "/src/js/api/Api.js"

const form = document.querySelector("form");
form.addEventListener("submit", Register.registeringCustomer);

const toHome = document.querySelector(".redirect-home");
toHome.addEventListener("click", () => {
    window.location = "../../index.html"
})

const toLogin = document.querySelector(".redirect-login");
toLogin.addEventListener("click",
    () => {
        window.location = "/src/htmlPages/login.html"
    })

const toRegister = document.querySelector(".button-register");


const modal = document.querySelector(".containerModal")
const removeModal = document.querySelector(".containerModal .modal button.removeModal");

const hiddenModal = () => {
    modal.classList.add("hidden")
}

removeModal.addEventListener("click", hiddenModal)
