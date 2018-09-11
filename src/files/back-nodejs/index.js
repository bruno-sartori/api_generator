const app = (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') ? require('./src/app').default : require('./build/app').default;

app.listen(process.env.PORT, () => {

		console.log('=============================');
		console.log(process.env.DB_HOST);
	console.log(`app running on ${process.env.PORT}`);
});
