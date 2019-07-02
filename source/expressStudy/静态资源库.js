let express = require("express");
let app = express();//实例化


app.use("/static",express.static("source\\router\\myBlog"));
app.get("/",(req,res)=>{
	res.send("Hello world");
});
app.listen(3000);
