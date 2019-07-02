//引入模块
let fs = require("fs");
//2.打开文件
let fd = fs.openSync("1.txt",'w');
console.log(
    fd
);
//3.写入内容
fs.writeFileSync(fd,"今天天气很好，快来学习");

//4.保存并退出 
fs.closeSync(fd);
