class AppError extends Error {
	constructor(message, errno) {
		// Calling parent constructor of base Error class.
		super(message);

		// Capturing stack trace, excluding constructor call from it.
		// Error.captureStackTrace(this, this.constructor);

		// You can use any additional properties you want.
		// I'm going to use preferred HTTP status for this error types.
		// `500` is the default value if not specified.
		this.errno = errno || 500;
		this.type = 'AppError';
	}
}

export default AppError;
