const fs=require('fs');
fs.writeFileSync("tf/tex.txt","hello");
var read = fs.readFileSync("tf/tex.txt");

var ord=read.toString()
console.log(ord);

module.exports.ord=ord;

