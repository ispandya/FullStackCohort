onst jwt = require("jsonwebtoken");

//1.generate2.decode3.verify
//1.generate

const value = {
  name: "ishita",
  accountNumber: 123123123,
}
//signup and generate
const token = jwt.sign(value, "secret");
console.log(token);
//here secret is the machine that generates the checkbooks

//following is my token(my personalized checkbook):
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNoaXRhIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MDg3MDY1MzR9.FCzzMOciuFauwyXr9DArCu704wl544ZeX3rZxEVeabA
