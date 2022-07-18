import {Api} from "/src/js/api/Api.js"
import {Card} from "/src/js/models/Card.js"

export class FilterButtons {

    static async checkLogin() {
        const token = localStorage.getItem("token");
        let dados = ""

        if (token) {
            dados = await Api.privateGet();
        } else {
            dados = await Api.publicGet();
        }


        return dados

    }

    static template = document.querySelector(".container");

    static async filterAll(vitrine = '/index.html') {
        let dados = await this.checkLogin() ;
        if(vitrine === '/index.html'){
            Card.createCard(dados)
        } else {
            Card.createCardAdmin(dados)
        }
    }


    static async filterByPanificadora(vitrine = '/index.html') {
        let dados = await this.checkLogin() ;
        let filterPanificadora = [];
        this.template.innerHTML = "";
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].categoria.toLowerCase() === "panificadora") {
                filterPanificadora.push(dados[i])
            }

        }
        if(vitrine === '/index.html'){
            Card.createCard(filterPanificadora)
        } else {
            Card.createCardAdmin(filterPanificadora)
        }
        

    }

    static async filterByFrutas(vitrine = '/index.html') {
        let dados = await this.checkLogin() ;
        let filterFrutas = [];

        this.template.innerHTML = "";
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].categoria.toLowerCase() === "frutas") {
                filterFrutas.push(dados[i])
            }

        }
        if(vitrine === '/index.html'){
            Card.createCard(filterFrutas)
        } else {
            Card.createCardAdmin(filterFrutas)
        }

    }
    static async filterByBebidas(vitrine = '/index.html') {
        let dados = await this.checkLogin() ;
        let filterBebidas = [];

        this.template.innerHTML = "";
        for (let i = 0; i < dados.length; i++) {
            if (dados[i].categoria.toLowerCase() === "bebidas") {
                filterBebidas.push(dados[i])
            }

        }
        if(vitrine === '/index.html'){
            Card.createCard(filterBebidas)
        } else {
            Card.createCardAdmin(filterBebidas)
        }

    }
}