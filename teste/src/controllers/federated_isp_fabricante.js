import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class federated_isp_fabricanteController {
	constructor(federated_isp_fabricante) {
		 this.federated_isp_fabricante = federated_isp_fabricante;
	}

	getAll() {
		return this.federated_isp_fabricante.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.federated_isp_fabricante.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.federated_isp_fabricante.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.federated_isp_fabricante.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.federated_isp_fabricante.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default federated_isp_fabricanteController;
