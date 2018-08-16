import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class empresasController {
	constructor(empresas) {
		 this.empresas = empresas;
	}

	getAll() {
		return this.empresas.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.empresas.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.empresas.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.empresas.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.empresas.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default empresasController;
