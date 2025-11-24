// primitive data types
//string, number, boolean, null, undefined, symbols,bigint

//non premetive data types / reference
//Array,objects, Functions

const students=["farhan", "ali", "qurban", "alam"];

let myObj={
    name:"Farhan",
   age :22
}
// console.log(myObj);

const myFunction= function(){
    console.log("Hello World")
};

//Stack and Heap

let myYoutube="Farhan"

let anotherName=myYoutube

anotherName="Rahim"

console.log(anotherName);
console.log(myYoutube);

let userOne = {
    email: "farhan@gmail.com",
    id: 3131
}

let  userTwo =userOne;

userTwo.email= "Rahim@gmail.com"

console.log(userTwo.email)
console.log(userOne.email);




