let fs = require("fs");
//异步没有结果，不会有返回结果的
fs.open("2.txt","w",(err,fd)=>{
    console.log(
        "7777"
    );
    
    //判断是否出错
    if(!err){
        //写入文件
        fs.writeFile(fd,"姐姐最好l",()=>{
            //写入成功
            if(!err){
                console.log(
                    "写入成功"
            )}
            else{
                throw err;
            } 
        });
        //关闭文件
        fs.close(fd,(err)=>{
            if(!err)
            {
                console.log(
                    "写入文件成功"
                );   
            }else{
                throw err;
            }
        })
    }
    else{
        throw err;
    }
});

console.log(
    "zx"
);
