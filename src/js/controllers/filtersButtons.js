import {FilterButtons} from "../models/FiltersButtons.js"

const path = window.location.pathname === "/" ? "/index.html" : window.location.pathname

const buttonTodos = document.querySelector("#all-button");
buttonTodos.addEventListener("click", () => {
    FilterButtons.filterAll(path)});

const buttonPanificadora = document.querySelector("#bakery-button");
buttonPanificadora.addEventListener("click", () => {
    FilterButtons.filterByPanificadora(path)});

const buttonFrutas = document.querySelector("#fruits-button");
buttonFrutas.addEventListener("click",() => {
 FilterButtons.filterByFrutas(path);});

const buttonBebidas = document.querySelector("#drinks-button");
buttonBebidas.addEventListener("click", () =>{
    FilterButtons.filterByBebidas(path)});