//creating a http server using express(hospital server)
//first bringing the express locally as its not a default library of node
//req,res => request , respond
const express = require("express");
const app = express();//(creating a clinic)

const users = [{
  name: "John",
  kidneys:[{
    healthy : false
  }]
}];
app.use(express.json());

app.get("/",function(req,res){//(ignore)query request ?n=30
  const johnKidneys = users[0].kidneys;
  const numOfKidneys = johnKidneys.length;
  let numOfHealthKidneys =0;
  for(let i=0; i<johnKidneys.length ; i++){
    if(johnKidneys[i].healthy){
      numOfHealthKidneys = numOfHealthKidneys + 1;
    }
  }
  const numOfunHealthKidneys = numOfKidneys - numOfHealthKidneys ;
  res.json({
    numOfKidneys,
    numOfHealthKidneys,
    numOfunHealthKidneys,
  })
})
app.post("/", function(req,res){//pushing a new data
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  })
  res.json({
    msg :"Done!"
  })
})
app.put("/", function(req,res){//update (replace) kidneys
  for(let k=0;k<users[0].kidneys.length; k++){
    users[0].kidneys[k].healthy = true; 
  }
  res.json({});
})
app.delete("/", function(req,res){
  if(isThereAtleastOneUnHealthyKidney()){
    const newKidneys =[];
    for(let j =0; j<users[0].kidneys.length; j++){
      if(users[0].kidneys[j].healthy){
        newKidneys.push({
          healthy: true
        })
      }
    }
    users[0].kidneys = newKidneys;
    res.json({msg : "done"})
  }else{
    res.status(411).json({
      msg : "You have no bad kidney!"
    });
  }
})
function isThereAtleastOneUnHealthyKidney(){
  let AtleastOneUnHealthyKidney = false;
  for(let i =0; i<users[0].kidneys.length; i++){
    if(!users[0].kidneys[i].healthy){
      AtleastOneUnHealthyKidney = true;
    }
  }
  return AtleastOneUnHealthyKidney;
}
app.listen(3000);//selecting a room
