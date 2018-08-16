import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class pessoas_emailsController {
	constructor(pessoas_emails) {
		 this.pessoas_emails = pessoas_emails;
	}

	getAll() {
		return this.pessoas_emails.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.pessoas_emails.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.pessoas_emails.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.pessoas_emails.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.pessoas_emails.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default pessoas_emailsController;
