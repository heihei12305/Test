let fs = require("fs");
//1.创建读入流
let rs = fs.createReadStream("1.mp4");
let ws = fs.createWriteStream("sp2.mp4");
// console.log(rs);
//2.创建管道
rs.pipe(ws); 
