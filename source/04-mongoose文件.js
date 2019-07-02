//1.引入模板
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/m_data',{useNewUrlParser:true});

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

let person = new personModel({
    name:"姐姐",
    age:19,
    sex:"女",
    chat:"all"
});
person.save((err,product)=>{
    if(!err){
        console.log(product);
    }
});
