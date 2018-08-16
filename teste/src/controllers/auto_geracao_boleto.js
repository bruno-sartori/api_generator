import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class auto_geracao_boletoController {
	constructor(auto_geracao_boleto) {
		 this.auto_geracao_boleto = auto_geracao_boleto;
	}

	getAll() {
		return this.auto_geracao_boleto.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.auto_geracao_boleto.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.auto_geracao_boleto.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.auto_geracao_boleto.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.auto_geracao_boleto.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default auto_geracao_boletoController;
