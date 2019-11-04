const polka = require('polka');

polka().get('/', (req, res) => {
	res.end(`Hello world`);
}).listen(3000);