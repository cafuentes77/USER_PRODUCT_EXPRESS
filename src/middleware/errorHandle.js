import AppError from "../error/AppError.js";
import { InternalServerError } from "../error/typesError.js";

export const errorHandle = (err, req, res, next) => {
    if (!(err instanceof AppError)) {
        err = new InternalServerError(
            err.message || 'Error Inesperado', 
            'Ocurrió un Error inesperado que requiere analisis');
    }

    const errorResponse = {
        status: 'Error',
        code: err.statusCode,
        message: err.message,
        error: err.details,
    }

    console.error(`[Error!] ${err.message}. Detalle: ${err.details}`);

    res.status(err.statusCode).jason(errorResponse)

}