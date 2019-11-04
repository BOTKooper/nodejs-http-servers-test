const service = require('express')({});

service.get('/', (req, res) => {
	res.send('Hello World');
});
service.listen(3000);