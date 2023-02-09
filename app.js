let name= "Abdul Hannan";
const states = 50;
let sum = 5+4; // add two numbers and store it in sum variable
sayHello();
checkAge(21,"Charles");
checkAge(27, "Abbay");
checkAge(18,"James");
checkAge(17,"John");


function sayHello()
{
    console.log("Hello world!");
}

 function checkAge(age,name)
 {
         if(age<21)
         console.log( "Sorry " + name + ", you aren't old enough to view this page!")
 }

 // javascript Array
 let vegetables=["Methi","carrots","beetroot","capsicum","Broclli"];
 for (let i=0; i<vegetables.length; i++) {
    console.log(vegetables[i]);
 }

 let pet={
    name: "don",
    breed: "Bull dog"
 };
 console.log(pet);

 //objects
 let person1={
   name: "john",
   age:"22"
 };
 let person2={
   name: "Ali",
   age:"21" 
 };
 let person3={
   name: "Dvid",
   age:"14"
 };
 let person4={
   name: "Maxwell",
   age:"30"
 };
 let person5={
   name: "Peterson",
   age:"11"
 };

 //array of person objects
 let personArray=[person1, person2, person3, person4, person5];

 for (let j=0; j<personArray.length; j++)
 {
  checkAge(personArray[j].age, personArray[j].name);
 }
 

 //function call
let result =getLength("Hello world");
console.log(result);

if(result%2==0)
   console.log("The world is a nice and even");
   else
   console.log("The world is an odd place");


 function getLength(word) //function definition
 {
   return word.length;
 }
