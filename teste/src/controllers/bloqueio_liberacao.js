import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class bloqueio_liberacaoController {
	constructor(bloqueio_liberacao) {
		 this.bloqueio_liberacao = bloqueio_liberacao;
	}

	getAll() {
		return this.bloqueio_liberacao.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.bloqueio_liberacao.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.bloqueio_liberacao.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.bloqueio_liberacao.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.bloqueio_liberacao.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default bloqueio_liberacaoController;
