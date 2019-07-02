let fs = require("fs");
//1.创建读入流
let rs = fs.createReadStream("1.mp4");
let ws = fs.createWriteStream("sp.mp4");
// console.log(rs);

//2.监视流的打开和关闭
rs.once("open",()=>{
    console.log("读入通道已经打开");
});

rs.once("close",()=>{
    console.log("读入通道已经关闭");
});

ws.once("open",()=>{
    console.log("写出通道已经打开");
});

ws.once("close",()=>{
    console.log("写出通道已经关闭");
});


//3.绑定data
rs.on("data",(data)=>{
    // console.log(data);
    ws.write(data);
});
