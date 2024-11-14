import { Usuario } from "../models/Usuario.model.js";

export const crearNuevoUsuario = async (req, res) => {
    try {
        const data = req.body
        const usuario = await Usuario.crear(data)

        res.status(201).json({
            message: 'Usuario creado con exito',
            status: 201,
            data: usuario
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al crear usuario",
            status: 500,
            error
        })
    }
}