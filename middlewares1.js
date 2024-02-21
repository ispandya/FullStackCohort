const express = require("express");
const app = express();
function usernamenpassword(req,res,next){
    const username = req.headers.username;
    const password = req.headers.password;
    if(username !="ishita" && password !="pass"){
        res.status(403).json({
            msg :"Incorrect username or/and password",
        });
    }else{
        next();
    }
};
function kidneyMiddlewares(req,res,next){
    const kidneyId = req.query.kidneyId;
    if(kidneyId != 1 && kidneyId !=2){
        res.status(403).json({
            msg :"Incorrect inputs",
        });
    }else{
        next();
    }
};

app.get("/health-checkup",usernamenpassword, kidneyMiddlewares, function(req,res){
    res.send("Your kidney is healthy");
});
app.get("/health-checkup",usernamenpassword,function(req,res){
    
    res.send("Your heart is healthy");
});
app.listen(3000);