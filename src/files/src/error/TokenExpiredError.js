import HttpStatus from 'http-status';
import AppError from './AppError';

class TokenExpiredError extends AppError {
	constructor(message) {
		super(message || 'O token expirou.', 901);
		this.name = 'TokenExpiredError';
		this.statusCode = HttpStatus.UNAUTHORIZED;
	}

}

export default TokenExpiredError;
