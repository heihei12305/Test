let http = require("http");
let url = require("url");
let querystring = require("querystring")//将字符串转化为对象

http.createServer((req,res)=>{
    // console.log(req.url);
    // let myUrl = url.parse(req.url,true);//对象、true->以对象的形式返回回来
    // let queryObj = myUrl.query;
    // console.log(queryObj);
    // console.log(queryObj.name)
    // console.log(queryObj.age);
    // console.log(queryObj.sex);
    if(req.url === "/postmsg" && req.method.toLowerCase()==="post"){
        //1.变量
        let allData = "";
        //2.接收小段数据
        req.on("data",(buf)=>{
            allData += buf;
            console.log(allData);
        })

        //3.所有的数据接收完毕
        req.once("end",()=>{
            res.end("OK!");
            let dataObj = querystring.parse(allData);
            console.log(dataObj);
        })

    }
    // console.log(req.url);
    // console.log(req.method);
}).listen(80,"127.0.0.1");
