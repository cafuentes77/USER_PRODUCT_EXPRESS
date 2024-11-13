import { v4 as uuidv4 } from 'uuid';


class Product {
    #id
    #name
    #description
    #price
    #stock
    #visible

    constructor (name, description, price, stock) {
        this.#name = name;
        this.#description = description;
        this.#price = price;
        this.#stock = stock;
        this.#visible = true
    }

    get id() {
        return this.#id
    }

    get name() {
        return this.#name
    }

    get description() {
        return this.#description
    }

    get price() {
        return this.#price
    }

    get stock() {
        return this.#stock
    }

    setName(newName) {
        this.#name = newName
    }

    setDescription(newDescription) {
        this.#description = newDescription
    }

    setPrice(newPrice) {
        this.#price = newPrice
    }

    setStock (newStock) {
        this.#stock = newStock
    }

    getAllProperties() {
        return {
            id: this.#id,
            name: this.#name,
            description: this.#description,
            price: this.#price,
            stock: this.#stock,
            visible: this.#visible
    }
}

}