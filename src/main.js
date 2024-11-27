import express from 'express';
import dotenv from 'dotenv';

import usuarioRouter from './routes/usuario.routes.js'
import productoRouter from './routes/producto.routes.js'
import { errorHandler } from './middleware/errorHandler.js';
import { verifyConnectionMail } from './services/mails/config.mail.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//endpoints
app.use('/api/v1', usuarioRouter)
app.use('/api/v1', productoRouter)

app.use(errorHandler)


app.listen(PORT, async () => {
    try {
        await verifyConnectionMail();
        console.log('El Transportador de correos está ready')
    } catch (error) {
        console.error('Problemas con el Transportador de correos', error)
    }
    console.log(`Server is running on port ${PORT}`);
})