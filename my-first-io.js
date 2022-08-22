const fs=require('fs')
const read=fs.readFileSync( process.argv[2])
let v=read.toString().split('\n').length-1
console.log(v)