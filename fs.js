const http=require("http");
const fs=require("fs");
const body=require("body-parser");
var express=require("express");
const app=express();
const conn=require("./db");
const { log } = require("console");
app.use(express.urlencoded());
const data=fs.readFileSync("index.html");
app.get("/",function(req,res,next){
      res.end(data);
      next();
})
app.post('/form',function(req,res){
    let namef=req.body.name;
    let rollf=req.body.roll;
    res.write(namef);
    res.write(rollf);
    let sql=`INSERT INTO usha(name,roll) VALUES ("${namef}","${rollf}")`;
    conn.query(sql,function(err,data){
        if(err)
        {
        throw err;
        console.log(err);
        }
        else
        {
        console.log("insertion success");
        }
    })
});
app.listen(2200);
console.log("server running at http://127.0.0.1:2200");