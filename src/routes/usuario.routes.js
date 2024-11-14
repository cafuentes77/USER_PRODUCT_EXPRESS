import { Router } from 'express'
import { crearNuevoUsuario, obtenerTodosLosUsuarios } from "../controllers/usuario.controller.js"

const router = Router()

router.post('/usuario', crearNuevoUsuario)
router.get('/usuario', obtenerTodosLosUsuarios)

export default router;