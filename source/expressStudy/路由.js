let express = require("express");
let app = express();//实例化

app.get("/",(req,res)=>{
    res.send("hello world");
});
app.get("/html5",(req,res)=>{
    // res.send("hello world");
    console.log(req.url);
    res.send("html5");
});
app.get("/html5/c1",(req,res)=>{//多级路由
    // res.send("hello world");
    console.log(req.url);
    res.send("html5--c1");
});

app.get("/jiejie/:name",(req,res)=>{//外界可传参
    // res.send("hello world");
    console.log(req.url);
    res.send(req.params.name);
});
app.listen(3000);
