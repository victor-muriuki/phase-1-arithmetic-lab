//a variable called multiply that multiplies two numbers and returns a value of  62
let num1 = 31;
let num2 = 2;

let multiply = num1 * num2;

console.log(multiply); 

// uses in built javascript object functions to generate a random number greater than 0 but less than 10
let random = Math.ceil(Math.random() * 10); 

console.log(random); 


// this divides two number and gets a remainder of 4
// i used num3 and num4 since i had already declared them in the above challange
let num3 = 39;
let num4 = 7;

let mod = num3 % num4;

console.log(mod); // Output: 0

//this creates a variable called max containing an array of numbers, it then uses math.max to get the highest number in the array
let numbers = [10, 15, 20, 5, 8, 12]; 
let max = Math.max(...numbers); //the spread syntax is used to separate the array into individual numbers for the math.max function

console.log(max); 


 