let http = require("http");
let fs = require("fs");
let ejs = require("ejs");

http.createServer((req,res)=>{
    //1.读取数据
    getDataJson((dataJson)=>{
        //2.读取模块
        fs.readFile("ejsStudy\\list.ejs",(err,data)=>{
            if(!err){
                let ejsList = data.toString();
                console.log(ejsList);
                //3.实例化模板
                let tmp = ejs.render(ejsList,dataJson);
                console.log(tmp);
                //4.返回页面

                res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
                res.end(tmp);
            }
            else{
                throw err;
            }

        });
    });


}).listen(80,"127.0.0.1");


const getDataJson = (callBack)=>{
    fs.readFile("ejsStudy\\tmp.json",(err,data)=>{
        if(!err)
        {
            let jsonData = JSON.parse(data);
            callBack(jsonData);
        }
        else{
            throw err;
        }
    })
}
