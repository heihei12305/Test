let http = require("http");

//创建服务器
let server = http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write("hello\n");
    res.write("<h1>haha</h1>");
    res.end("hahahha");
});

//监听
server.listen(80,"127.0.0.1");
