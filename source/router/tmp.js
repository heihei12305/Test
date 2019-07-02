let fs = require("fs");
//读取文件
fs.readFile("router\\test1.html","utf-8",(err,data)=>{
    if(!err){
        console.log(data);
        console.log(data.toString());
    }
    else{
        throw err;
    }
});
