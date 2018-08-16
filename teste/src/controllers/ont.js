import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class ontController {
	constructor(ont) {
		 this.ont = ont;
	}

	getAll() {
		return this.ont.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.ont.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.ont.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.ont.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.ont.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default ontController;
