import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class tipos_tentativas_contatoController {
	constructor(tipos_tentativas_contato) {
		 this.tipos_tentativas_contato = tipos_tentativas_contato;
	}

	getAll() {
		return this.tipos_tentativas_contato.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.tipos_tentativas_contato.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.tipos_tentativas_contato.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.tipos_tentativas_contato.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.tipos_tentativas_contato.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default tipos_tentativas_contatoController;
