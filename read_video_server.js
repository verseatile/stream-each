const server = require('http').createServer()
const fs = require('fs')

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'video/mp4' })

  const src = fs.createReadStream('./mongo.mp4')
  console.log('sending over the file to a client')
  src.pipe(res)
})

server.listen(8000, () => {
  console.log('listening.....')

})
