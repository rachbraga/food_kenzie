import {Api} from "/src/js/api/Api.js"

export class Register {

    static async registeringCustomer(event) {
        event.preventDefault();


        const inputs = event.target;

        const newCustomer = {}
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].name) {

                const name = inputs[i].name
                const value = inputs[i].value

                newCustomer[name] = value
            }
        }
        
        if (newCustomer.email && newCustomer.name && newCustomer.password) {
            await Api.register(newCustomer)
            const templateModal = document.querySelector(".containerModal");
            const textModal = document.querySelector(".message-register");
            const removeModal = document.querySelector(".redirect-login");

            removeModal.classList.toggle('hidden');
            templateModal.classList.remove('hidden');

            textModal.innerHTML = `<p class="message-register"> Usuário cadastrado com sucesso.</p>`

        } else {
            const templateModal = document.querySelector(".containerModal");
            const textModal = document.querySelector(".message-register");
            const removeModal = document.querySelector(".redirect-login");

            removeModal.classList.add('hidden');
            templateModal.classList.remove('hidden');

            textModal.innerHTML = `<p class="message-register"> Dados inválidos,</p>
            <p class="message-register"> tente novamente.</p>`
        }

    }



}