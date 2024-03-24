import express from "express";
const app = express();

//Task1: a function that greats a user given their FN (types to the agrument of the function):
function greet(firstname: string){
    console.log("Hello" + firstname);
}
greet("ishita");

//Task2: a function that calculates the sum of two functions(return type for a function)
function sum(a: number, b: number) : number{
    return a+b;
}

const value = sum(11,12);
console.log(value)

//Task3 : boolean return type and if-else statement
function isLegal(age:number):boolean{
    if(age>18){
        return true;
    }else{
        return false;
    }
}
let x = isLegal(21);
console.log(x);

//Task4 : a function that takes another function as input and runs it after 1 sec
function runAfter(fn: () =>void){
    setTimeout(fn,1000);
}

runAfter(function(){
    console.log("hi ishi");
})

//Task5: Interface and option agrument
interface User{
    firstname : string;
    lastName: string;
    age: number;
    email? : string //(option)
};
function greetme(user :User){
    console.log("hello" + user.firstname)
}
greetme({
    firstname: "ishita",
    lastName: "pandya",
    age: 21
})

//Task6 : Implement a interface
interface Person{
    name: string;
    age: number;
    greet(phase: string): void;
}

class Employee implements Person {
    name: string;
    age: number;

    constructor(n: string, a: number) {
        this.name = n;
        this.age = a;
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name}`);
    }
}
const e = new Employee("ishita", 21);
console.log(e.name);

//Task7: Unions
type StringOrNumber = string | number;

function printId(id: StringOrNumber) {
  console.log(`ID: ${id}`);
}

printId(101); // ID: 101
printId("202"); // ID: 202

//Task8: Intesection
type Employee2 = {
    name: string;
    startDate: Date;
};
type Manager = {
    name: string;
    department: string;
};
  
  type TeamLead = Employee2 & Manager;
  
  const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
  };
/*Interface can be implemented into class (types not not be)
Types can be used in union and intersection */

//Task9: Arrays
function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));

//Task10: enums
enum Direction {
    Up,
    Down,
    Left,
    Right
}

function doSomething(keyPressed: Direction) {
	// do something.
}

doSomething(Direction.Up)

//Task11: generics
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

//Task12 : import and export
  