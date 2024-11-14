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

export const obtenerTodosLosUsuarios = async (req, res) => {
    try {
        const data = await Usuario.encontarTodos()
        if(!data)throw new Error('No existen los datos')

        res.status(200).json({
            message: 'Usuarios encontrados',
            status: 200,
            data
        })
    }catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            status: 500,
            data
    })
}
}