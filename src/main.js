import express from 'express';
import usuarioRouter from './routes/usuario.routes.js'
import productoRouter from './routes/producto.routes.js'


const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//endpoints
app.use('/api/v1', usuarioRouter)
app.use('/api/v1', productoRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})