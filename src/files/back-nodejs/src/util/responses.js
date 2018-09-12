import HttpStatus from 'http-status';
import logger from './logger';

const defaultMeta = { type: 'success', code: HttpStatus.OK, message: '', props: '' };

export const defaultResponse = (meta, data = "", statusCode = HttpStatus.OK) => ({
  data: { meta: { ...defaultMeta, ...meta }, data},
  statusCode,
});

export const errorResponse = (error, statusCode = HttpStatus.UNPROCESSABLE_ENTITY) => {
	logger.error(error);

	return defaultResponse({
	  type: error.name,
	  code: error.code,
		errno: error.errno,
		message: error.message,
	  stack: error.stack,
		props: error.props
	}, '', statusCode);
};
