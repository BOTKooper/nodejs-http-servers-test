const http = require('http')
const router = require('find-my-way')()
 
router.on('GET', '/', (req, res, params) => {
  res.end('Hello world')
})
 
const server = http.createServer((req, res) => {
  router.lookup(req, res)
})
 
server.listen(3000)