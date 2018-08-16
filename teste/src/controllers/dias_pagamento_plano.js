import HttpStatus from 'http-status';
import { defaultResponse, ErrorResponse } from '../util/responses';

class dias_pagamento_planoController {
	constructor(dias_pagamento_plano) {
		 this.dias_pagamento_plano = dias_pagamento_plano;
	}

	getAll() {
		return this.dias_pagamento_plano.findAll({})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	getById(params) {
		return this.dias_pagamento_plano.findOne({
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message));
	}

	create(data) {
		return this.dias_pagamento_plano.create(data)
		.then(result => defaultResponse(result, HttpStatus.CREATED))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	update(data, params) {
		return this.dias_pagamento_plano.update(data, {
			where: params,
		})
		.then(result => defaultResponse(result))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

	delete(params) {
		return this.dias_pagamento_plano.destroy({
			where: params,
		})
		.then(result => defaultResponse(result, HttpStatus.NO_CONTENT))
		.catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY));
	}

}
export default dias_pagamento_planoController;
