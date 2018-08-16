import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class planosController {
	constructor(planos) {
		 this.planos = planos;
	}

	getAll() {
		return this.planos.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.planos.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.planos.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.planos.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.planos.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default planosController;