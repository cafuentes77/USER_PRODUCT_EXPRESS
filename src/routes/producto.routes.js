import { Router } from 'express'
import { crearNuevoProducto, obtenerTodosLosProductos } from "../controllers/producto.controller.js"

const router = Router()

router.post('/producto', crearNuevoProducto)
router.get ('/producto', obtenerTodosLosProductos)

export default router;