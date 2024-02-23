const jwt = require("jsonwebtoken");

//1.generate2.decode3.verify
//3.verify
const value = {
  name:"ishita",
  accountNumber: 123123123,
}
const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNoaXRhIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MDg3MDY1MzR9.FCzzMOciuFauwyXr9DArCu704wl544ZeX3rZxEVeabA","secret");
console.log(token);
