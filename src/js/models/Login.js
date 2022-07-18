import { Api } from "../api/Api.js"

export class LogIn {

    static async getToken (event, form) {
        event.preventDefault()

        const data = {
            email: form[0].value,
            password: form[1].value
        }

        return await Api.login(data)

    }

}