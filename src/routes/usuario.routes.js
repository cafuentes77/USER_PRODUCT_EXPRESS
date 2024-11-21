import { Router } from 'express'
import { 
    crearNuevoUsuario, 
    obtenerTodosLosUsuarios, 
    obtenerUsuarioPorId,
    actualizarUsuario,
    borrarUsuario,
    eliminarPermanenteUsuario, 
    obtenerTodosLosUsuriosActivos,
    obtenerUsuariosActivosPorId
} from "../controllers/usuario.controller.js"

const router = Router();

router.post('/usuario', crearNuevoUsuario);
router.get('/usuario/admin/all', obtenerTodosLosUsuarios);
router.get('/usuario/admin/:id', obtenerUsuarioPorId);
router.put('/usuario/:id', actualizarUsuario );
router.put('/usuario/delete/:id', borrarUsuario);
router.delete('/usuario/:id', eliminarPermanenteUsuario);
router.get('/usuario', obtenerTodosLosUsuriosActivos);
router.get("/usuario/:id", obtenerUsuariosActivosPorId);

export default router;