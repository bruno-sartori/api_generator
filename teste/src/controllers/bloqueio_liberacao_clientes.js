import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class bloqueio_liberacao_clientesController {
	constructor(bloqueio_liberacao_clientes) {
		 this.bloqueio_liberacao_clientes = bloqueio_liberacao_clientes;
	}

	getAll() {
		return this.bloqueio_liberacao_clientes.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.bloqueio_liberacao_clientes.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.bloqueio_liberacao_clientes.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.bloqueio_liberacao_clientes.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.bloqueio_liberacao_clientes.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default bloqueio_liberacao_clientesController;
