import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class atendimentos_tentativas_contatoController {
	constructor(atendimentos_tentativas_contato) {
		 this.atendimentos_tentativas_contato = atendimentos_tentativas_contato;
	}

	getAll() {
		return this.atendimentos_tentativas_contato.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.atendimentos_tentativas_contato.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.atendimentos_tentativas_contato.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.atendimentos_tentativas_contato.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.atendimentos_tentativas_contato.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default atendimentos_tentativas_contatoController;
