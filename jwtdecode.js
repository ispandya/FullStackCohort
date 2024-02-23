onst jwt = require("jsonwebtoken");

//1.generate2.decode3.verify
//2.decode

const contents = {
    "name": "ishita",
    "accountNumber": 123123123,
    "iat": 1708706534
  }
//signup and generate
const token = jwt.sign(contents, "hdgfjhdgf");
console.log(token);
//here hdgfjhdgf is not the same as secret (the machine) hence it wont verify

//following is my decoded token (my duplicated checkbook):
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNoaXRhIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MDg3MDY1MzR9.MUEjWYPl2TzQSau0l5CP7ov82p_6P0DXa6LJtABAXtc

//2.1 trying to verifying the decoded token
const value = {
  name:"ishita",
  accountNumber: 123123123,
}
const token1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaXNoaXRhIiwiYWNjb3VudE51bWJlciI6MTIzMTIzMTIzLCJpYXQiOjE3MDg3MDY1MzR9.MUEjWYPl2TzQSau0l5CP7ov82p_6P0DXa6LJtABAXtc","secret");
