import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class configuracoes_grupo_clienteController {
	constructor(configuracoes_grupo_cliente) {
		 this.configuracoes_grupo_cliente = configuracoes_grupo_cliente;
	}

	getAll() {
		return this.configuracoes_grupo_cliente.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.configuracoes_grupo_cliente.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.configuracoes_grupo_cliente.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.configuracoes_grupo_cliente.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.configuracoes_grupo_cliente.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default configuracoes_grupo_clienteController;
