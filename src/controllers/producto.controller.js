import { Producto } from "../models/Producto.model.js";

export const crearNuevoProducto = async(req, res) => {
    try {
        const data = req.body;
        const producto = await Producto.crear(data)

        res.status(201).json({
            message: 'Producto creado con éxito',
            status: 201,
            producto
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el producto',
            status: 500,
            error
        })
    }

}