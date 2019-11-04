const service = require('restana')({});

service.get('/', (req, res) => {
	res.send('Hello World');
});
service.start(3000);