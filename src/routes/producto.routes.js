import { Router } from 'express'
import { crearNuevoProducto } from "../controllers/producto.controller.js"

const router = Router()

router.post('/producto', crearNuevoProducto)

export default router;