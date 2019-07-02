let http = require("http");
let fs = require("fs");
let url = require("url");
let path = require("path");

//1.创建服务器
http.createServer((req,res)=>{
    //1.1获取url地址
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname;
    
    //2.处理路径
    if(pathName.lastIndexOf(".")===-1)//如果是文件夹默认在后面加上/index.html
    {
        pathName += "/index.html";
    }

    //3.拼接路径
    let fileUrl = "router/"+path.normalize("./myBlog/"+pathName);
    let extname = path.extname(fileUrl);
    console.log(fileUrl);
    
    //4.读取文件
    fs.readFile(fileUrl,(err,data)=>{
        //4.1没有找到
        if(err){
            res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
            res.end("<h1>当前页面不存在</h1>");
        }

        //4.2找到
        else{
            getContentType(extname,(contentType)=>{
                res.writeHead(200,{"Content-Type":contentType});
                res.end(data);
            })
        }
    });
    // console.log(fileUrl);

}).listen(80,"127.0.0.1");




function getContentType(extName,callBack){
    //1.读取文件
    fs.readFile("router\\myBlog\\mime.json",(err,data)=>{
        if(err){
            throw err;
            return ;
        }

        let mimeJson  =JSON.parse(data);
        //把data转化为JSON格式
        let contentType =mimeJson[extName] || "text/plain";//给它一个默认值
        callBack(contentType);
    })
}
