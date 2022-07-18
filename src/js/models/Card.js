export class Card {
  static createCard(arr) {
    const section = document.querySelector(".container");
    section.innerHTML = "";

    for (let i = 0; i < arr.length; i++) {
      const result = arr[i];

      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
                        <img src="${result.imagem}" alt="${result.nome}" />
                        <h2>${result.nome}</h2>
                        <p>${result.descricao}</p>
                        <div class="text-category">
                        <span>${result.categoria}</span>
                        </div>
                        <div class="price">

                        <span>R$ ${result.preco.toFixed(2).replace(".", ",")}</span>
                        <button class="fa-solid fa-cart-arrow-down" id="${result.id}"></button>
                        
                        </div>
                        `;

      section.appendChild(card);
    }
  }

  static createCardAdmin(arr) {
    const section = document.querySelector("#card-section");
    section.innerHTML = "";

    const subTitles = document.createElement("section");
    subTitles.id = "subtitles-section";

    subTitles.innerHTML = `
                          <div id="product-div">
                          <p>Produto</p>
                          </div>
                          <div id="category-div">
                          <p>Categorias</p>
                          </div>
                          <div id="description-div">
                          <p>Descrição</p>
                          </div>
                          <div id="action-div">
                          <p>Ações</p>
                          </div>
                          `;

    section.appendChild(subTitles);

    for (let i = 0; i < arr.length; i++) {
      const { id, nome, categoria, imagem, descricao } = arr[i];

      const card = document.createElement("div");
      card.classList.add("card-div");

      card.innerHTML = `
                        <div class="imgH2-div">
                        <img class="card-img" src="${imagem}" alt="${nome}" />
                        <h2 class="name-h2">${nome}</h2>
                        </div>
                        <div class="categories-div">

                        <span>${categoria.replaceAll(",", "  ")}</span>

                        </div>
                        <p class="description-p">${descricao}</p>
                        <div class="buttons-div">
                        <button class="${id} fa-solid fa-pen-to-square" id="button-edit"></button>
                        <button class="${id} fa-solid fa-trash" id="button-delete"></button>
                        </div>
                        `;

      section.appendChild(card);
    }
  }
}
