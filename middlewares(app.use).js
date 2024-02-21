const express = require("express");
const app = express();
let numOfrequest =0

function calculaterequest(req,res,next){
    numOfrequest++;
    console.log( numOfrequest);
    next();
}
//now if i know that i need a specific middleware function for all my app.get 
//then just to reduce the code instead of writing teh specific middleware
//in all the app.get i can just create app.use(calculaterequest*)
//*-the middleware function name so after that line all the requests will have a implicit
//middleware in  them
//*middleware must have next() in them otherwise the
//program will get stuck*
//console.log(res.body) needs app.use(express.json())
//because body can be any thing maybe a text or js or json when we 
//call the above line it parses it to jason says that it expeects the json input
//req.headers or req.query doesnt need that

app.use(calculaterequest);

app.post("/health-checkup",function(req,res){
    res.json({
        msg :"hi there"
    })
});
app.get("/health-checkup",function(req,res){
    
    res.send("Your heart is healthy");
});
app.listen(3000);