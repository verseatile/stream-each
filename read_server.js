const server = require('http').createServer()
const fs = require('fs')

server.on('request', (req, res) => {
  const src = fs.createReadStream('./blah.txt')
  console.log('sending over the file to a client')
  src.pipe(res)
})

server.listen(8000, () => {
  console.log('listening.....')
})
