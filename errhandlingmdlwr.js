const express = require("express");
const app = express();
app.use(express.json());

//here this is a post request an we are calling 
//req.body hence app.use(express.json()) is must to
//extract teh body
app.post("/health-checkup",function(req,res){
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const kidneylen = kidneys.length;
    res.send("you have"+ kidneylen +"kidneys");
});

//global catches = a middleware at the end with 4 inputs
//it is used when an error occurs and there is a meg tehn needs to be send
//json when a status and msg needs to be defined and send when
//string is tobe printed

app.use(function(err, req,res,next){
    res.json({
        msg : "Sorry something is up wityh your server"
    })  
})

app.listen(3000);