const express = require('express');
const bodyParser=require('body-parser');
const { render } = require('ejs');

const app=express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));
app.set("view engine","ejs");

const items =[];

const today =new Date();
let options ={
    weekday:"long",
    day:"numeric",
    month:"long"
}

var day =today.toLocaleDateString("en-us",options)



app.get("/",function(req,res){
    res.render("home");
})

app.get("/compose",function(req,res){
    res.render('compose');
})

app.get("/list",function(req,res){
    res.render('list',{
        items:items,
        listTitle:day 
    })
})








app.listen(3000,function(){
    console.log("The server is renning at port 3000")
})

app.post("/",function(req,res){
   let listItem = req.body.listItem;
   console.log(listItem);
   items.push(listItem);
   res.redirect('/list');
})