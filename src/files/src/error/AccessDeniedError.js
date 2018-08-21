import HttpStatus from 'http-status';
import AppError from './AppError';

class AccessDeniedError extends AppError {
	constructor(message) {
		super(message || 'Você não tem acesso à esta rota, este evento será registrado.', 900);
		this.name = 'AccessDeniedError';
		this.statusCode = HttpStatus.UNAUTHORIZED;
	}

}

export default AccessDeniedError;
