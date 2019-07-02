let http = require("http");
let url = require("url");

let {URL} = require("url");

http.createServer((req,res)=>{
    // console.log(req.url);
    let myUrl = url.parse(req.url);//对象
    //let myUrl = new URL()//需要完整的url地址
    console.log(myUrl);
    res.end("Hello world");
}).listen(80,"127.0.0.1");
