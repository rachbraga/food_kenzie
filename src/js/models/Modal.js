export class Modal{

    static body = document.querySelector('body')
    static teste = document.querySelector('#testando-div')

    static modalAddEdit(page = "Add"){
        
        const modal = document.createElement('div')
        modal.classList.add('background')

        let title
        let buttons

        if(page === "Add"){

            title = "Cadastro de Produto"

            buttons = 
                            `
                            <button id="cadastrar">Cadastrar Produto</button>
                            `
        }else {

            title = "Edição de produto"

            buttons = 
                            `
                            <button id="delete">Excluir</button>
                            <button id="save">Salvar alterações</button>
                            ` 
        }

        modal.innerHTML = 
                            `
                            <div class="modal">

                                <form class="formModal">

                                    <div id="modalTitle">
                                        <p>${title}</p>
                                        <p id="closeModal">X</p>
                                    </div>

                                    <label for="nome">Nome do Produto</label>
                                    <input name="nome" type="text" placeholder="Digitar o nome">

                                    <label for="descricao">Descrição</label>
                                    <input name="descricao" type="text" placeholder="Digitar a descrição">

                                    <label>Categoria</label>

                                    <div id="containerCategory">
                                        <p class="btnCategory" id="panificadora">Panificadora</p>
                                        <p class="btnCategory" id="frutas">Frutas</p>
                                        <p class="btnCategory" id="bebidas">Bebidas</p>
                                    </div>

                                    <label for="preco">Valor do Produto</label>
                                    <input name="preco" type="text" placeholder="Digitar o valor aqui">

                                    <label for="imagem">Link da imagem</label>
                                    <input name="imagem" type="text" placeholder="Inserir link">

                                    <div id="modalButtons"></div>

                                </form>
                            </div>
                            `

        this.body.appendChild(modal)

        Modal.addEventCategory()

        document.querySelector(`#modalButtons`).innerHTML = buttons

        document.querySelector("#closeModal").addEventListener('click', Modal.removeModal)

    }

    static modalDelete(){
        const modal = document.createElement('div')
        modal.classList.add('background')

        modal.innerHTML = 
                            `
                            <div class="modalExcluir">

                                <div id="modalTitle">
                                    <p>Exclusão de produto</p>
                                    <p id="closeModal">X</p>
                                </div>

                                <p>Tem certeza que deseja excluir esse produto?</p>

                                <div id="btnDelete">
                                    <button class='yes'>Sim</button>
                                    <button class='no'>Não</button>
                                </div>

                            </div>
                            `

        this.body.appendChild(modal)

        document.querySelector("#closeModal").addEventListener('click', Modal.removeModal)
        document.querySelector(".no").addEventListener('click', Modal.removeModal)


    }

    static removeModal(){
        const background = document.querySelector('.background');
        const statusMessage = document.querySelector('.main-status')
        
        if(background){
            document.querySelector("body").removeChild(background);
        } else{
            document.querySelector("body").removeChild(statusMessage);
        }
    }

    static addEventCategory() {

        const btnCategory = document.querySelectorAll(".btnCategory")

        btnCategory.forEach((el) => {
            el.setAttribute("status", "false")

            el.addEventListener('click', () => { 
                el.classList.toggle("selected")

                const status = el.getAttribute("status")

                if(status === "false"){
                    el.setAttribute("status", "true")
                } else {
                    el.setAttribute("status", "false")
                }

            })

        })



    }

    static addSuccess(){

        const modal = document.createElement('div');
        modal.classList.add('message-modal');
        modal.id = 'success-modal';
        const testeDiv = document.createElement('div');
        testeDiv.classList.add('main-status');

        modal.innerHTML = `
                            <div class="status-div">
                                <div class="header">
                                    <p id="success-header">Status</p>
                                    <button id="success-button">X</button>
                                </div>
                                <div class="messages">
                                    <p id="success-message">Produto adicionado com sucesso</p>
                                </div>
                                <div id="container-success"></div>
                            </div>
                            `
        testeDiv.appendChild(modal)
        this.body.appendChild(testeDiv);

    }

    static addError(){

        const modal = document.createElement('div');
        modal.classList.add('message-modal');
        modal.id = 'error-modal';
        const testeDiv = document.createElement('div');
        testeDiv.classList.add('main-status');

        modal.innerHTML = `
                            <div class="status-div">
                                <div class="header">
                                    <p id="error-header">Status</p>
                                    <button id="error-button">X</button>
                                </div>
                                <div class="messages">
                                    <p id="error-message">Ocorreu algum erro, o produto não foi adicionado</p>
                                </div>
                                <div id="container-error"></div>
                            </div>
                            `
        
        testeDiv.appendChild(modal)
        this.body.appendChild(testeDiv);

    }

    static genericModal(message){

        const modal = document.createElement('div');
        modal.classList.add('message-modal');
        modal.id = 'error-modal';
        const testeDiv = document.createElement('div');
        testeDiv.classList.add('main-status');

        testeDiv.style.position = "absolute"
        testeDiv.style.width = "100%"
        testeDiv.style.height = "100%"
        testeDiv.style.display = "flex"
        testeDiv.style.justifyContent = "center"
        testeDiv.style.alignItems = "center"

        testeDiv.style.top = 0

        modal.innerHTML = `
                            <div class="status-div">
                                <div class="header">
                                    <p id="error-header">Status</p>
                                    <button id="error-button">X</button>
                                </div>
                                <div class="messages">
                                    <p id="error-message">${message}</p>
                                </div>
                                <div id="container-error"></div>
                            </div>
                            `
        
        testeDiv.appendChild(modal)
        this.body.appendChild(testeDiv);

        document.querySelector("#error-button").addEventListener('click', ()=> {
            Modal.removeModal()
        })

    }

}