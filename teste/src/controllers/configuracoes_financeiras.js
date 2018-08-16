import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class configuracoes_financeirasController {
	constructor(configuracoes_financeiras) {
		 this.configuracoes_financeiras = configuracoes_financeiras;
	}

	getAll() {
		return this.configuracoes_financeiras.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.configuracoes_financeiras.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.configuracoes_financeiras.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.configuracoes_financeiras.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.configuracoes_financeiras.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default configuracoes_financeirasController;
