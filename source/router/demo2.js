let http = require("http");
let fs = require("fs");

//创建服务器
let server = http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url === "/test1.html"){
        // console.log(111);
        fs.readFile("router\\test1.html",(err,data)=>{
            if(!err){
                console.log(data.toString());
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }else{
                res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
                
                res.end("err");
            }
        });
    }else if(req.url === "/test2.html"){
        // console.log(222);
        fs.readFile("router\\test1.html",(err,data)=>{
            if(!err){
                // console.log(data.toString());
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }
        })
    }else if(req.url === "/"){
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("Hello world");
    }
    else{
        res.writeHead(404,{"Content-Type":"text/html;charset=UTF-8"});
        res.end("访问的页面不存在");
    }
    
});

//监听
server.listen(80,"127.0.0.1");
