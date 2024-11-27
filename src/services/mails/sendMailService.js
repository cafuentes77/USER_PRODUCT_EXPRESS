export const sendMailService = async ({ to, subject, message }) => {
    try {
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: to.join(','),
            subject,
            text: message
        }
        const infoData = await transporter.sendMail(mailOptions)
        console.log('Correo Enviado con Éxito', infoData.messageId);
        return infoData
    } catch (error) {
        console.error('Error al Enviar Correo');
        throw new Error(error)
    }
}