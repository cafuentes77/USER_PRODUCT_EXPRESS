import { Router } from 'express'
import { 
    crearNuevoUsuario, 
    obtenerTodosLosUsuarios, 
    obtenerUsuarioPorId,
    actualizarUsuario, 
    eliminarPermanenteUsuario 
} from "../controllers/usuario.controller.js"

const router = Router();

router.post('/usuario', crearNuevoUsuario);
router.get('/usuario', obtenerTodosLosUsuarios);
router.get('/usuario/:id', obtenerUsuarioPorId);
router.put('/usuario/:id', actualizarUsuario );
router.delete('/usuario/:id', eliminarPermanenteUsuario)

export default router;