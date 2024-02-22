const express = require("express");
const app = express();
//zod - input validation check library
const zod = require("zod");
//kidneys should be an array of numbers
// const schema = zod.array(zod.number());
//email : a string
//password : a sstring f atleast 8 letters
//country : "IN" "US"
const schema = zod.object({
    email : zod.string().email(),
    password :zod.string().min(8),
    country : zod.literal("IN").or(zod.literal("US")),
    kidneys : zod.array(zod.number()),
})
app.use(express.json());


app.post("/health-checkup",function(req,res){
    //kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg : "input is invalid"
        })
    }else{
        res.send({
            response
        })
    }
});

app.listen(3000);