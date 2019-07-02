//1.引入模板
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/m_data');

//监听各种状态
let db = mongoose.connection;
db.on("error",()=>{
    console.log("连接失败")
});

db.once('open',function(){
    console.log("连接成功")    
})


db.once('close',function(){
    console.log("数据库断开成功")    
})

//2创建Schema（模式对象）
let Schema = mongoose.Schema;//定义规则
let personSchema = new Schema({
    name:String,
    age:Number,
    sex:{
        type:String,
        default:"男"
    },
    chat:String
});

//3.创建Model对象
let personModel = mongoose.model("person",personSchema);

//4.插入文档
personModel.create({
    name:"姐姐",
    age:19,
    sex:"女",
    chat:"hahaha"
},(err)=>{
    if(!err){
        console.log("插入成功");
    }else{
        throw err;
    }
})
personModel.create({
    name:"可好看的姐姐呢",
    age:19,
    sex:"女",
    chat:"hahaha"
},(err)=>{
    if(!err){
        console.log("插入成功");
    }else{
        throw err;
    }
})
