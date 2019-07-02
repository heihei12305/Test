let fs = require("fs");
//创建写入流
let ws = fs.createWriteStream("3.txt");
console.log(
    ws
);
//打开通道
ws.once("open",()=>{
    console.log("通道已经打开");
});

ws.once("close",()=>{
    console.log("通道已经关闭");
});

//写入内容
ws.write("我在马路边\n");
ws.write("捡到一分钱\n");
ws.write("买了一把刀\n");
ws.write("杀死一头牛");


//5.关闭通道
ws.end();
