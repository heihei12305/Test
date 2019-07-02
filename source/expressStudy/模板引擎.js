let express = require("express");
let fs = require("fs");
let app = express();//实例化

//指定视图所在的位置
app.set('views','expressStudy\\views');
//2.注册模板引擎
app.set('view engine','ejs');

app.get("/",(req,res)=>{
    getDataJson((dataJson)=>{
        // res.render("index",{"lists":["jiejie",19,"all"]});
        res.render("list",dataJson);
    });
});
app.listen(3000);


const getDataJson = (callBack)=>{
    fs.readFile("expressStudy\\views\\tmp.json",(err,data)=>{
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
