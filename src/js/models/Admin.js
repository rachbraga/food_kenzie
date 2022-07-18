import { Api } from "../api/Api.js"
import { Card } from "./Card.js"
import { Modal } from "./Modal.js"

export class Admin {

    static createProduct(form) {

        const btnCategory = document.querySelectorAll(".btnCategory")

        let newProduct = {}
        let categorias = []

        btnCategory.forEach((el) => {

            const status = el.getAttribute("status")

            if (status === "true") {
                categorias.push(el.id)
            }

        })

        for (let i = 0; i < form.length; i++) {
            if (form[i].tagName === 'INPUT') {
                newProduct[form[i].name] = form[i].value
            }

        }

        newProduct["categoria"] = categorias.join(", ")

        return newProduct

    }

    static async deleteProduct(idProduct) {

        document.querySelector(".yes").addEventListener('click', async function () {

            await Api.deleteProduct(idProduct)
      
            const getprivate = await Api.privateGet();
            Card.createCardAdmin(getprivate);

            Modal.removeModal()
      
        })
    }

    static recoveryData(productTarget){

        const userData = document.querySelectorAll(".formModal input");

        userData[0].value = productTarget.nome;
        userData[1].value = productTarget.descricao;
        userData[2].value = productTarget.preco;
        userData[3].value = productTarget.imagem;


        const categories = document.querySelector('#containerCategory');
        const categorias = [categories.childNodes[1].id, categories.childNodes[3].id, categories.childNodes[5].id];
    
        const arrCategories = productTarget.categoria.replaceAll(',', '').split(' ');
    
    
        for(let i = 0; i < arrCategories.length; i++){
          if(categorias.includes(arrCategories[i].toLowerCase())){
            const buttonCategory = document.querySelector(`#${arrCategories[i].toLowerCase()}`);
            buttonCategory.setAttribute('status', 'true');
            buttonCategory.classList.toggle("selected");
          }
        }
    
    }

}