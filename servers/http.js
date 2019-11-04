const http = require('http');

const service = new http.Server();
service.on('request', (req, res) => {
	if (req.method === 'GET' && req.url === '/') {
		res.end('Hello World');
	}
});

service.listen(3000);