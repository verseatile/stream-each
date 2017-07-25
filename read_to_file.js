const { Duplex } = require('stream')
const fs = require('fs')

const dupes = new Duplex()

let readSrc = fs.createReadStream('blah.txt')
let fileSrc = fs.createWriteStream('pipes.txt')

readSrc
  .pipe(fileSrc)

console.log('we done here')
