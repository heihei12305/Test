let http = require("http");
let formidable = require("formidable");
let util = require("util");
let fs = require("fs");
let path = require("path");
let uuidv1 = require('uuid/v1');

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
        // console.log(__dirname);
        
        let targetFile = path.join(__dirname,'/upload');
        form.uploadDir = targetFile;
        // form.uploadDir = "./";
        // console.log(targetFile);
        //3.获取表单内容
        form.parse(req, (err, fields, files)=> {
            if(!err){
                //3.1生成随机的名称
                let name = uuidv1();
                //3.2获取上传文件名后缀
                let extName = path.extname(files.photo.name);
                // console.log(extName);
                //3.3设置路径
                // let oldPath = __dirname+"/"+files.photo.path;
                let oldPath =files.photo.path;

                let newPath = __dirname+"/upload/"+name+extName;
                console.log(oldPath);
                console.log(newPath);
                
                //3.4改名
                fs.rename(oldPath,newPath,(err)=>{
                    if(!err){
                        res.writeHead(200, {'content-type': 'text/html;charset="UTF-8"'});
                        res.write("写入成功");
                        res.end(util.inspect({fields: fields, files: files}));//把一个对象转化为字符串

                    }
                    else{
                        throw err;
                    }
                });              
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
