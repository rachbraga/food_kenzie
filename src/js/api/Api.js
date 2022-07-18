export class Api {

    static rota = "https://kenzie-food-api.herokuapp.com"

    static async register(data) {

        let response = await fetch(`${this.rota}/auth/register`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        let result = await response.json()

        return result

    }

    static async login(data) {

        let response = await fetch(`${this.rota}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        let result = await response.json()

        return result

    }

    static async publicGet() {

        let response = await fetch(`${this.rota}/products`)
        let data = await response.json()

        return data

    }

    static async privateGet() {

        let token = localStorage.getItem('token')

        let response = await fetch(`${this.rota}/my/products`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        let data = await response.json()

        return data

    }

    static async addProduct(data) {

        let token = localStorage.getItem('token')

        let response = await fetch(`${this.rota}/my/products`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        let result = await response.json()

        return result

    }

    static async editProduct(data, productId) {

        let token = localStorage.getItem('token')

        let response = await fetch(`${this.rota}/my/products/${productId}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        let result = await response.json()

        return result
    }

    static async deleteProduct(productId) {

        let token = localStorage.getItem('token')

        await fetch(`${this.rota}/my/products/${productId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })

    }

    static async cartGet() {

        let token = localStorage.getItem('token')

        let response = await fetch(`${this.rota}/cart`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })

        let data = await response.json()

        return data

    }

    static async cartAddProduct(data) {

        let token = localStorage.getItem('token')

        let response = await fetch(`${this.rota}/cart/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        let result = await response.json()

        return result

    }

    static async cartDeleteProduct(productId) {

        let token = localStorage.getItem('token')

        await fetch(`${this.rota}/cart/remove/${productId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })

    }

}