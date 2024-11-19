import { Router } from 'express'
import { 
    crearNuevoUsuario, 
    obtenerTodosLosUsuarios, 
    obtenerUsuarioPorId,
    actualizarUsuario, 
    eliminarPermanenteUsuario, 
    obtenerTodosLosUsuriosActivos,
    obtenerUsuariosActivosPorId
} from "../controllers/usuario.controller.js"

const router = Router();

router.post('/usuario', crearNuevoUsuario);
router.get('/usuario/admin/all', obtenerTodosLosUsuarios);
router.get('/usuario', obtenerTodosLosUsuarios);
router.get('/usuario/:id', obtenerUsuarioPorId);
router.put('/usuario/:id', actualizarUsuario );
router.delete('/usuario/:id', eliminarPermanenteUsuario);
router.get('/usuario', obtenerTodosLosUsuriosActivos);
router.get("/usuario/:id", obtenerUsuariosActivosPorId);

export default router;