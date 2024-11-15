import { Router } from 'express'
import { crearNuevoUsuario, obtenerTodosLosUsuarios, obtenerUsuarioPorId } from "../controllers/usuario.controller.js"

const router = Router();

router.post('/usuario', crearNuevoUsuario);
router.get('/usuario', obtenerTodosLosUsuarios);
router.get('/usuario/:id', obtenerUsuarioPorId);

export default router;