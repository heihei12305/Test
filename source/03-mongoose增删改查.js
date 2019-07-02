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

//4.增删改查

//4.1增加
// personModel.create([
//     { name:"可好看的姐姐0呢", age:190, sex:"女", chat:"hahaha"},
//     { name:"可好看的姐姐1呢", age:191, sex:"女", chat:"hahaha"},
//     { name:"可好看的姐姐2呢", age:192, sex:"女", chat:"hahaha"},
//     { name:"可好看的姐姐2呢", age:193, sex:"女", chat:"hahaha"}
// ],(err)=>{
//     if(!err){
//         console.log("插入成功");
//     }else{
//         throw err;
//     }
// })

//4.2查找

// personModel.find({},(err,docs)=>{ //{}=>全部
//     if(!err)
//     {
//         console.log(docs);
//         console.log(typeof docs);
//     }
// });

// personModel.find({name:"姐姐"},{name:1},(err,docs)=>{  //查找所有文档把name返回回来
//     if(!err)
//     {
//         console.log(docs);
//         console.log(typeof docs);
//     }
//     else{
//         console.log("找寻失败");
        
//     }
// });

// personModel.find({},"-_id name sex",{skip:5,limit:5},(err,docs)=>{  //建议还是用大括号的形式
//     if(!err)
//     {
//         console.log(docs);
//         console.log(typeof docs);
//     }
//     else{
//         console.log("找寻失败");
        
//     }
// });


//4.3 修改
// personModel.updateOne({name:"可好看的姐姐呢"},{$set:{age:20}},(err)=>{
//     if(!err)
//     {
//         console.log("修改成功");
//     }
//     else{
//         console.log("修改失败");
//     }
// })

//4.4删除
//Model.deleteMany()
//Model.deleteOne()
//Model.remove()

// personModel.deleteOne({name:"可好看的姐姐呢"},(err)=>{
//     if(!err){
//         console.log("删除成功");   
//     }else{
//         throw err;
//     }
// })

//4.5 统计文档个数
//Model.count();

personModel.countDocuments({},(err,count)=>{
    if(!err)
    {
        console.log(count);
    }
})

