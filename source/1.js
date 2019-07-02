//1.字符串转成二进制
// let str = 'www.baidu.com';
let str = '姐姐';//一个汉字占了三个字节 
let buffer = Buffer.from(str);
console.log(buffer);
console.log(buffer.length);
console.log(str.length);

console.log(buffer.toString());


 