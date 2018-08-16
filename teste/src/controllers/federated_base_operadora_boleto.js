import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class federated_base_operadora_boletoController {
	constructor(federated_base_operadora_boleto) {
		 this.federated_base_operadora_boleto = federated_base_operadora_boleto;
	}

	getAll() {
		return this.federated_base_operadora_boleto.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.federated_base_operadora_boleto.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.federated_base_operadora_boleto.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.federated_base_operadora_boleto.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.federated_base_operadora_boleto.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default federated_base_operadora_boletoController;
