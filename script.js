//This is a function  called 'sayMyName'
// //and it has 0 arguments
// //it logs out your name to the console
// function sayMyName() {
//   console.log('Taner')
// }

// //This is a function  called 'sayMyName2'
// //and it has 1 arguments called 'name'
// //Does: it logs out your name to the console
// function sayMyName2(name) {
//   console.log(name)
// }

// function greeting(name) {
//   //greet = 'hi ' + name + ', nice to meet you'
//   //Template literals ``
//   greet = `Hi ${name}, nice to meet you`
//   console.log(greet)
// }

// greeting('Tom')

// function sum(a, b){
//return
//   return a + b
// }
//console.log(sum (1, 2))
// num1 = sum(1, 2)
// console.log(num1)

//Tip Calculator

// function calculateFoodTotal(food, tip) {
//   tipPercentage = tip / 100
//   tipAmount = food * tipPercentage
//   total = sum(food, tipAmount)
//   return total
// }

// console.log(calculateFoodTotal(300, 20))

//ES6
//Arrow Functions =>
// const sumArrow = (a, b) => {
//   return a, b
// }

// const sumArrow = (a, b) => a, b


//Exercise function

/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

const add = (a, b) => {
  //Add function here
  return a + b
}
console.log(add(1, 2))

const sub = (a, b) => {
  //Subtract function here
  return a - b
}

console.log(sub(1, 2))

const div = (a, b) => {
  //Divide function here
  return a / b
}

console.log(div(1, 2))

const mul = (a, b) => {
  //Multiply function here
  return a * b
}

console.log(mul(1, 2))

/*
  TODO: create a function that console logs the result of any of the above operations.
*/
