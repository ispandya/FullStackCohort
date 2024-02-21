const express = require("express");
const app = express();

app.get("/health-checkup", function(req,res){
    const kidneyId = req.query.kidneysId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username !=="ishita" || password !="pass"){
        res.status(403).json({
            msg: "User doesnt exits",
        });
        return;
    }
    if(kidneyId != 1 || kidneyId !=2){
        res.status(411).json({
            msg: "wrong inputs",
        });
        return;
    }
    res.send("Your heart is healthy");
    // if(username == "ishita" && password == "pass"){
    //     if(kidneyId ==1 || kidneyId ==2){
    //         res.json({
    //             msg :"Your kidney is fine!"
    //         })
    //     }
    // }
    // res.status(400).json({msg: "Somethings up with your input"})
});
app.listen(3000);