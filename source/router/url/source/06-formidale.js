let http = require("http");
let formidable = require("formidable");
let util = require("util");
let fs = require("fs");
let path = require("path");


http.createServer((req,res)=>{
    if(req.url === "/pages.html"){
        // console.log(222);
        fs.readFile("router\\url\\html\\pages.html",(err,data)=>{
            if(!err){
                // console.log(data.toString());
                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(data);
            }
            else{
                console.log("html1");
                
            }
        })
    }
    else if(req.url === "/postmsg" && req.method.toLowerCase()==="post"){
        //1.实例化对象
        let form = new formidable.IncomingForm();
        //2.设置上传的文件路径
        console.log(__dirname);
        
        let targetFile = path.join(__dirname,'/upload');
        form.uploadDir = targetFile;
        // form.uploadDir = "./";
        // console.log(targetFile);
        //3.获取表单内容
        form.parse(req, (err, fields, files)=> {
            if(!err){
                console.log(files);
                res.writeHead(200, {'content-type': 'text/plain;charset="UTF-8"'});
                res.write('received upload:\n\n');
                res.end(util.inspect({fields: fields, files: files}));//把一个对象转化为字符串
                console.log(22);
            }
            else{
                console.log("err_3");
            }
          });
    }
    else
    {
        console.log("err");
        
    }
    // console.log(req.url);
    // console.log(req.method);
}).listen(80,"127.0.0.1");
