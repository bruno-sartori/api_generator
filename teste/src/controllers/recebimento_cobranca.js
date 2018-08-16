import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class recebimento_cobrancaController {
	constructor(recebimento_cobranca) {
		 this.recebimento_cobranca = recebimento_cobranca;
	}

	getAll() {
		return this.recebimento_cobranca.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.recebimento_cobranca.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.recebimento_cobranca.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.recebimento_cobranca.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.recebimento_cobranca.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default recebimento_cobrancaController;
