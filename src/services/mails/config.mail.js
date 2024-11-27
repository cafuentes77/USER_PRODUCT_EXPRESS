import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_SECURE, // si es true usa SSL
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS, // contraseña de apliocaciones
    },
});

export const verifyConnectionMail = async () => {
    try {
        console.log('Conexion exitosa con el servidor de correo');
    }catch (error) {
        console.error('Error al conectar con el servidor de correo', error);
        throw new Error(error)
    }
}