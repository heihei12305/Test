let express = require("express");
let app = express();
app.get("/",(req,res)=>{
    //res.send("Hello");//返回字符串
    // res.send({name:"姐姐",age:19});//返回json
    // res.send("<input type='date'>");
    // res.status(404).send("Bad Request")
    //send 方式只能响应一次

    //多次 用node原生write,end
    res.write("jiejie");
    res.write("ahhaha");
    res.end("21e");
});

app.get("/:name/:age",(req,res)=>{
    // let name = req.params.name;
    let name = req.params["name"];
    let age = req.params["age"];
    res.write(age);
    res.end(name);
    // res.send(name); 
});

app.listen(3000);
