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
        const data = await Usuario.encontrarTodos()
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

export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const {id} = req.params.id
        const data = await Usuario.encontrarPorId(id);

        res.status(200).json({
            message: 'usuario encontrado',
            status: 200,
            data
        })
    }catch (error) {
        res.status(500).json({
            message: 'Error al obtener el usuario',
            status: 500,
            data
        })
    }
}

export const actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params
        const dataUsuario = req.body

        const actualizarUsuario = await Usuario.actualizar(id, dataUsuario)

        res.status(201).json({
            message: 'usuario encontrado',
            status: 201,
            oldata: actualizarUsuario,
            newData: dataUsuario
        })

    }catch (error) {
        res.status(500).json({
            message: 'Error al actualizar el usuario',
            status: 500,
            error
                })
    }
}

export const eliminarPermanenteUsuario = async(req, res) => {
    try {
        const { id } = req.params
        const usuarioBorrar = await Usuario.borrarForEvaaa(id)
        res.status(200).json({
            message: `usuario con ${id} eliminado con exito`,
            status: 200,
            datadeleted: usuarioBorrar
        })
    }catch (error) {
        res.status(500).json({
            message: 'Error al eliminar el usuario',
            status: 500,
            error,
        })
    }
}

export const obtenerTodosLosUsuriosActivos = async (req, res) => {
    try {
        const usuarios = await Usuario.obtenerUsuariosActivos();
        res.status(200).json({
            message: 'usuarios encontrados',
            status: 200,
            usuarios
        })
    }catch (error) {
        res.status(500).json({
            message: 'Error al obtener los usuarios',
            status: 500,
            error
        })
    }
}

export const obtenerUsuariosActivosPorId = async (req, res) => {
    try {
        const { id } = req.params   
        const usuario = await Usuario.obtenerUsuarioPorId(id)
        res.status(200).json({
            message: 'usuario encontrado con exito',
            status: 200,
            data:usuario
        })

    }catch (error) {
        res.status(500).json({
            message: 'Error al obtener el usuario',
            status: 500,
            error,
        })
    }
}