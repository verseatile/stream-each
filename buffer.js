let buf = Buffer.from('ayo!')
let buf2 = Buffer.from(' brah!')
//console.log(buf.toString('utf-8', 1, 3))
//console.log(buf.toString())
let bufcat = Buffer.concat([buf, buf2])
console.log(buf.toJSON(buf))
console.log(bufcat.toString())

//buffer.slice() makes a new buffer
