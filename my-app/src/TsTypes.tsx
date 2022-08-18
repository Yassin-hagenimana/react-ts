import React from 'react'
import "./App.css"
export default function TsTypes() {

let name:string; //string type
let age:number; //number type
//let age: number | string age have both number and string types
let isStudent:boolean //boolean type

let hobbies:string[]; //array of strings
let ages:number[]; // array of numbers
let role:[number,string]; //tuple contains fixed number of values and types defined on them

role=[2,"Admin"]; //initialize tuples

// two ways to define objects
// way number one
let animal:Object;
//way number two use type or interface keyword

type Person={
  name:string,
  age?:number //add question mark to make property optional
}


let person:Person={
  name:"Yassin",
  age:21
};

console.log(person.name)

//define function in typescript
let printName:(name:string)=>void // it can return string,number etc;

//unknown type in typescript

let PersonName:unknown;


//type and interface in depth

interface Animal{
  color:string,
  age?:number
}

//type extends person
type X= Person &{
  a:string,
  b:number
}

//  extending type requires to add all properties from all types
type Y= X &{ //using all X properties in Y
  c:string,
  d:number
}

//extending interfaces

interface Dog extends Animal{ //extending interfaces
  name:string,
  age:number
}

type Test={
  a:boolean
}
interface Letter extends Test{
  a:boolean
}

  return (
    <div className='App'>Hello World</div>
  )
}
