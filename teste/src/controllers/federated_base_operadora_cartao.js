import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class federated_base_operadora_cartaoController {
	constructor(federated_base_operadora_cartao) {
		 this.federated_base_operadora_cartao = federated_base_operadora_cartao;
	}

	getAll() {
		return this.federated_base_operadora_cartao.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.federated_base_operadora_cartao.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.federated_base_operadora_cartao.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.federated_base_operadora_cartao.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.federated_base_operadora_cartao.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default federated_base_operadora_cartaoController;
