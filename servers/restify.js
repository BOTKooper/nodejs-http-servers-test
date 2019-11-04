const restify = require('restify');

const server = restify.createServer();
server.get('/', (req, res) => {
    res.send('Hello world')
});

server.listen(3000);