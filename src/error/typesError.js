import { config } from "nodemon";
import AppError from "./AppError.js";

export class ValidationError extends appError {
    constructor (message, details) {
        super(message || 'Error de Validación', 400, details);
    }
}

export class NotFoundError extends AppError {
    constructor(message, details, entity) {
        super(message || `${entity} no encontrado`, 404, details);
    }
}

export class YeisonError extends AppError {
    constructor(message, details) {
        super(message || 'Error en el JSON de datos', 500, details);
    }
}

export class InternalServerError extends AppError {
    constructor(message, details) {
        super(message || 'Error Interno del servidor', 500, details);
    }
}

