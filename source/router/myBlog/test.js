let http = require("http");
let fs = require("fs");

//创建服务器
let server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === "/index.html"){
        // console.log(111);
        fs.readFile("./source/router/myBlog/index.html",(err,data)=>{
            if(!err){
                console.log(data.toString());
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }else{
                res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
                console.log(err);
                res.end("err");
            }
        });
    }else if(req.url === "/article.html"){
        // console.log(222);
        fs.readFile("./source/router/myBlog/article.html",(err,data)=>{
            if(!err){
                // console.log(data.toString());
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }
        })
    }else if(req.url === "/"){//根目录
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("Hello world");
    }else if(req.url === "/css/main.css"){//css
        fs.readFile("./source/router/myBlog/css/main.css",(err,data)=>{
            if(!err){
                res.writeHead(200,{"Content-Type":"text/css"});
                res.end(data);
            }else{
                console.log("err_css");
            }
        });
    }else if(req.url === "/img/cat.jpg"){//img
        fs.readFile("./source/router/myBlog/img/cat.jpg",(err,data)=>{
            if(!err){
                res.writeHead(200,{"Content-Type":"text/css"});
                //res.writeHead(200,{"Content-Type":"video/mpeg4"});
                //视频
                res.end(data);
            }else{
                console.log("err_css");
            }
        });
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("访问的页面不存在");
    }
    
});

//监听
server.listen(80,"127.0.0.1");
