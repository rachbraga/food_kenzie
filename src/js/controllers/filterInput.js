import { Filter } from "../models/FilterInput.js";
import { Api } from "../api/Api.js";

const inputSearch = document.querySelector("input")

inputSearch.addEventListener("click", async (event) => {
    if (localStorage.getItem("token")) {
        const privateArray = await Api.privateGet(localStorage.getItem("token"))
        inputSearch.addEventListener("keyup", (event) => {
            Filter.search(privateArray, inputSearch.value)
        })
    } else {
        const publicArray = await Api.publicGet()
        inputSearch.addEventListener("keyup", (event) => {
            Filter.search(publicArray, inputSearch.value)
        })
    }
})