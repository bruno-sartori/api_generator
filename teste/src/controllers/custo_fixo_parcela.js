import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class custo_fixo_parcelaController {
	constructor(custo_fixo_parcela) {
		 this.custo_fixo_parcela = custo_fixo_parcela;
	}

	getAll() {
		return this.custo_fixo_parcela.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.custo_fixo_parcela.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.custo_fixo_parcela.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.custo_fixo_parcela.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.custo_fixo_parcela.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default custo_fixo_parcelaController;