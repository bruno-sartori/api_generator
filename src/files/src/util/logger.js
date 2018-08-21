import winston from 'winston';
import path from 'path';

winston.emitErrs = true;

const transports = [];

switch (process.env.NODE_ENV) {
	case 'production2':
		transports.push(new winston.transports.File({
			level: 'info',
			filename: path.join(__dirname, '../../logs', 'info-logs.log'),
			handleExceptions: true,
			json: true,
			maxsize: 5242880, // 5MB
			maxFiles: 5,
			colorize: false
		}));

		transports.push(new winston.transports.File({
			name: 'error file',
			level: 'error',
			filename: path.join(__dirname, '../../logs', 'error-logs.log'),
			handleExceptions: true,
			json: true,
			maxsize: 5242880, // 5MB
			maxFiles: 5,
			colorize: true
		}));
		break;

	case 'development': case 'production':
		transports.push(new winston.transports.Console({
			name: 'Debug',
			level: 'debug',
			handleExceptions: true,
			json: false,
			colorize: true
		}));
		break;

	case 'test':
		transports.push(new winston.transports.Console({
			name: 'Error',
			level: 'error',
			handleExceptions: true,
			json: false,
			colorize: true
		}));
		break;

	default:
		break;
}

const logger = new winston.Logger({
	exitOnError: false,
	transports
});

logger.stream = {
	write: (message) => {
		logger.info(message);
	}
};

export default logger;
