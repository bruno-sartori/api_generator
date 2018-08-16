import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class atendimentos_tipos_servicosController {
	constructor(atendimentos_tipos_servicos) {
		 this.atendimentos_tipos_servicos = atendimentos_tipos_servicos;
	}

	getAll() {
		return this.atendimentos_tipos_servicos.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.atendimentos_tipos_servicos.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.atendimentos_tipos_servicos.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.atendimentos_tipos_servicos.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.atendimentos_tipos_servicos.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default atendimentos_tipos_servicosController;
