import { Api } from "../api/Api.js";
import { Admin } from "../models/Admin.js";
import { Card } from "../models/Card.js";
import { Filter } from "../models/FilterInput.js";
import { Modal } from "../models/Modal.js";

const token = localStorage.getItem("token");

const logo = document.querySelector("header h1")
logo.style.cursor = "pointer"
logo.addEventListener("click", () => {
  window.location = "../../index.html"
})

if (token) {
  const getprivate = await Api.privateGet();
  Card.createCardAdmin(getprivate);
}

const body = document.querySelector("body")

body.addEventListener("click", async function () {

  const button = event.target.id;

  if (button === "add-button") {

    Modal.modalAddEdit();

    const userData = document.querySelector(".formModal");

    userData.addEventListener("submit", async function () {

      event.preventDefault();
      const newProduct = Admin.createProduct(event.target);

      const apiAddResponse = await Api.addProduct(newProduct);
      
      if(apiAddResponse.id !== undefined){
        Modal.addSuccess();

        const buttonClose = document.querySelector('#success-button');
        buttonClose.addEventListener('click', Modal.removeModal);

      } else {
        Modal.addError();

        const buttonClose = document.querySelector('#error-button');
        buttonClose.addEventListener('click', Modal.removeModal);
      }

      const getprivate = await Api.privateGet();
      Card.createCardAdmin(getprivate);

      Modal.removeModal();

    })
  }

  if (button === "button-edit") {

    Modal.modalAddEdit("edit");


    const idProduct = event.target.className.split(" ")[0];
    const idNumber = Number(idProduct);


    const infoProduct = await Api.privateGet();
    const productTarget = infoProduct.find(el => el.id === idNumber);


    Admin.recoveryData(productTarget);


    const formEdit = document.querySelector(".formModal");


    formEdit.addEventListener('submit', async function (event) {
      event.preventDefault();


      const data = Admin.createProduct(formEdit);


      await Api.editProduct(data, idNumber);


      Modal.removeModal();
      const getprivate = await Api.privateGet();
      Card.createCardAdmin(getprivate);
      

    })

    const buttonDelete = document.querySelector('#delete');

    buttonDelete.addEventListener('click', () => {

      Modal.removeModal();

      Modal.modalDelete();

      Admin.deleteProduct(idProduct);

    });

  }

  if (button === "button-delete") {

    const idProduct = event.target.className.split(" ")[0];

    Modal.modalDelete();

    Admin.deleteProduct(idProduct);

  }

})

const inputSearch = document.querySelector("input")

inputSearch.addEventListener("click", async (event) => {
  if (localStorage.getItem("token")) {
      const privateArray = await Api.privateGet(localStorage.getItem("token"))
      inputSearch.addEventListener("keyup", (event) => {
          Filter.search(privateArray, inputSearch.value, "admin")
      })
  }
})