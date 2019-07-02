let fs = require("fs");
//读取文件
// fs.readFile("3.txt",(err,data)=>{
//     if(!err){
//         console.log(data);
//         console.log(data.toString());
//     }
//     else{
//         throw err;
//     }
// });
//读取图片
fs.readFile("d4e31e8978bf64c9621cc57463864c4.png",(err,data)=>{
    if(!err){
        //2.2写入图片文件
        fs.writeFile("img.jpg",data,(err)=>{
            if(!err)
            {
                console.log("写入成功");
            }else{
                throw err;
            }
        });
    }
    else{
        throw err;
    }
});
//读取视频也是可以的
fs.readFile("d4e31e8978bf64c9621cc57463864c4.png",(err,data)=>{
    if(!err){
        //2.2写入图片文件
        fs.writeFile("img.jpg",data,(err)=>{
            if(!err)
            {
                console.log("写入成功");
            }else{
                throw err;
            }
        });
    }
    else{
        throw err;
    }
});
