import { Router } from 'express'
import { crearNuevoUsuario } from "../controllers/usuario.controller.js"

const router = Router()

router.post('/usuario', crearNuevoUsuario)

export default router;