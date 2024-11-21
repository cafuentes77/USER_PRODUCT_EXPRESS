import { v4 as uuidv4 } from 'uuid';
import { 
    createDataFile, 
    getAllData, 
    getDataById, 
    updateData, 
    permaDeleteData 
} from '../utils/fileUtils.js';
import { Validate } from '../utils/Validaciones.js';

import { VALID_ROLES } from "../utils/constants/validRoles.js";
import { InternalServerError, ValidationError } from "../error/typesError.js";

export class Producto {
    #id
    #name
    #description
    #price
    #stock
    #visible

    constructor(name, description, price, stock) {
        this.#id = uuidv4()
        this.#name = Validate.productText(name, "Nombre");
        this.#description = Validate.userName(description, "Descripción");
        this.#price = Validate.amount(price, 'Precio');
        this.#stock = Validate.amount(stock, 'Stock');
        this.#visible = stock > 0
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
        try {
          Validate.userName(newName, "Nombre");
          this.#name = newName;
        } catch (error) {
            throw new ValidationError('Error al modificar el campo nombre',error)
        }
    }

    setDescription(newDescription) {
        try {
          Validate.userName(newDescription, "Descripción");
          this.#name = newName;
        } catch (error) {
            throw new ValidationError('Error al modificar el campo descripción',error);
        }
    }

    setPrice(newPrice) {
        try {
          Validate.amount(newPrice, "Precio");
          this.#price = newPrice;
        } catch (error) {
            throw new ValidationError('Error al modificar el campo precio',error);
        }
    }

    setStock(newStock) {
        try {
          Validate.amount(newStock, "Stock");
          this.#stock = newStock;
        } catch (error) {
            throw new ValidationError('Error al modificar el campo stock',error);
        }    
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


    static async crear(data) {
        try {
            const { name, description, price, stock } = data;
            const product = new Producto(name, description, price, stock);
            const productObject = product.getAllProperties();

            await createDataFile(productObject, 'productos.json');

            return productObject;
        } catch (error) {
            throw new InternalServerError(`Fallo al crear un nuevo producto`, error)
            
        }
    }

    static async encontrarTodos() {
        try {
            const productos = await getAllData('productos.json')
            return productos
        } catch (error) {
            throw new InternalServerError(`Fallo al obtener los datos de los productos`, error)
        }
    }

    static async encontrarPorId(id) {
        try {
            const producto = await getDataById(id, 'productos.json');
            return producto
        } catch (error) {
            throw new InternalServerError("Error al obtener los datos del producto", error);
        }
    }

    static async actualizar(id, data) {
        try {
            const actualizarProducto = await updateData(id, data, 'productos.json')
            return actualizarProducto
        } catch (error) {
            throw new InternalServerError(`Fallo al actualizar el producto`, error);
        } 
    }

    static async eliminarTheReal(id) {
        try {
            const productoBorrar = await permaDeleteData(id, 'productos.json');
            return productoBorrar
        } catch (error) {
            throw new InternalServerError(`Fallo al eliminar el prodcuto`, error);
        }

    }
}
