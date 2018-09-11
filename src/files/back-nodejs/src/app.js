import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import routes from './routes/index';
import authRoute from './routes/auth';
import datasource from './config/datasource';
import config from './config/config';
import authorization from './auth';
import logger from './util/logger';

const app = express();
app.config = config;
app.logger = logger;
app.datasource = datasource(app);

const auth = authorization(app);

// Initializing express middlewares
app.use(morgan('combined', { stream: logger.stream }));
app.use(helmet());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cors({
	origin: (origin, callback) => {
	/*
	* uncomment this when you have a client app
	*/

	//	const whitelist = ['localhost:8080'];
	//	if (whitelist.indexOf(origin) !== -1 || process.env.NODE_ENV === 'test') {
			callback(null, true);
	//	} else {
	//		const errorText = `Not allowed by CORS, origin: ${origin}`;
	//		app.logger.error(errorText);
	//		callback(new Error(errorText));
	//	}
	}
}));

app.use(auth.initialize());

app.auth = auth;

routes(app);
authRoute(app);

export default app;
